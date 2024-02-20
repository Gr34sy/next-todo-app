//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

//Components
import { List } from "@/components/Lists/List";

//Hooks
import { useState } from "react";
import { useRouter } from "next/router";

//Backend
import { ObjectId } from "mongodb";
import { dbConnect } from "../../utils/db";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";

export default function ListPage(props) {
  // Hooks
  const INITIAL_LIST = props.list;
  const [list, setList] = useState(INITIAL_LIST);
  const [editTitle, setEditTitle] = useState(false);

  const router = useRouter();

  // Operations on Title
  function changeTitleMode() {
    setEditTitle((prev) => !prev);
  }
  function changeTitle(e) {
    setList((prevList) => ({
      ...prevList,
      title: e.target.value,
    }));
  }
  // Updating Task Array
  function updateTasks(tasks) {
    setList((prevList) => ({
      ...prevList,
      tasks,
    }));
  }
  // Saving and Discarding Changes
  function discardChanges() {
    router.reload();
  }

  async function saveChanges() {
    const response = await fetch(`/api/lists/${list._id}`, {
      method: "PUT",
      body: JSON.stringify(list),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <main className="list-layout">
      <div className="list-layout__header section__header">
        <h1 className="list-layout__header_title">
          {editTitle && (
            <input
              type="text"
              value={list.title}
              onChange={changeTitle}
              className="big-input"
            />
          )}
          {!editTitle && list.title}
        </h1>
        

        <FontAwesomeIcon
          icon={editTitle ? faRightFromBracket : faPenToSquare}
          className="list-layout__header_icon"
          onClick={changeTitleMode}
        />
      </div>

      <div className="simple-list">
        <List
          items={list.tasks}
          updateFunction={updateTasks}
          listId={list._id}
        />
      </div>

      <div className="list-layout__buttons">
        <button
          className="custom-button custom-button--big list-layout__buttons_discard-btn"
          onClick={discardChanges}
        >
          Discard
        </button>

        <button
          className="custom-button custom-button--big list-layout__buttons_save-btn"
          onClick={saveChanges}
        >
          Save
        </button>
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  //getting params
  const { params } = context;

  //getting session data
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session)return{
    redirect: {
      destination: "/sign-in",
    },
  };

  //opening mongodb connection
  const client = await dbConnect();
  const db = client.db("ToDo");
  const userCollection = db.collection(session.user.email);

  //retrieving user lists from mongodb
  const userList = await userCollection.findOne({_id: new ObjectId(params.listId)});
  client.close();

  return {
    props: { 
      list: {
        ...userList,
        _id: userList._id.toString(),
      },
    },
  };
}
