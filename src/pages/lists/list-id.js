//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

//Components
import { List } from "@/components/Lists/List";

//Functions
import { ObjectId } from "mongodb";
import { dbConnect } from "@/utils/dbConnect";
import { useState } from "react";

export default function ListPage(props) {
  //List state
  const INITIAL_LIST = props.simple_list;
  const [list, setList] = useState(INITIAL_LIST);
  //Edit State
  const [editTitle, setEditTitle] = useState(false);

  // Operations on Title
  function changeTitleMode() {
    setEditTitle((prev) => !prev);
  }
  function changeTitle(e){
    setList((prevList) => ({
      ...prevList,
      title: e.target.value,
    }))
  }
  //Updating Task Array
  function updateTasks(tasks){
    setList((prevList) => ({
      ...prevList,
      tasks
    }))
  }
  // Saving and Discarding Changes
  function discardChanges(){
    setList(INITIAL_LIST);
  }

  return (
    <main className="list-layout ">
      <div className="list-layout__header section__header">
        <h1 className="list-layout__header_title">
          {editTitle && <input type="text" value={list.title} onChange={changeTitle} />}
          {!editTitle && list.title}
        </h1>

        <FontAwesomeIcon
          icon={editTitle ? faRightFromBracket: faPenToSquare}
          className="list-layout__header_icon"
          onClick={changeTitleMode}
        />
      </div>

      <div className="simple-list">
        <List
          items={list.tasks}
          updateFunction={updateTasks}
          listId={list.list_id}
        />
      </div>

      <div className="list-layout__buttons">
        <button className="custom-button custom-button--big list-layout__buttons_discard-btn" onClick={discardChanges}>
          Discard Changes
        </button>

        <button className="custom-button custom-button--big list-layout__buttons_save-btn">
          Save Changes
        </button>
      </div>
    </main>
  );
}


// Getting Props
export async function getStaticProps() {
  const client = await dbConnect();
  const db = client.db("ToDo");

  const listId = new ObjectId("65a66a27b6a8062447227710");
  const list = await Object(
    db.collection("Dummy List").findOne({ _id: listId })
  );
  console.log(list);
  client.close();
  return {
    props: {
      simple_list: {
        list_id: list._id.toString(),
        title: list.title,
        tasks: list.tasks,
      },
    },
  };
}
