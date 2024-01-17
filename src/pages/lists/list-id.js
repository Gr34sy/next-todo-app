//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

//Components
import { ListPageLayout } from "@/components/Lists/ListPageLayout";
import { List } from "@/components/Lists/List";

//Functions
import { ObjectId } from "mongodb";
import { dbConnect } from "@/utils/dbConnect";
import { useState, useEffect } from "react";

export default function ListPage(props) {
  const INITIAL_STATE = props.simple_list;
  const [list, setList] = useState(INITIAL_STATE);
  const [editMode, setEditMode] = useState(false);

  function changeEditMode() {
    setEditMode((prev) => !prev);
  }
  function addTask(taskname) {
    const taskId = list.tasks.length.toString();

    const task = {
      id: list.list_id + "-" + taskId,
      name: taskname,
      isDone: false,
    };

    setList((prevList) => ({
      ...prevList,
      tasks: [...prevList.tasks, task],
    }));
  }
  function deleteTask(taskId) {
    console.log(taskId);
    const filteredTasks = list.tasks.filter((task) => task.id != taskId);

    setList((prevList) => ({
      ...prevList,
      tasks: filteredTasks,
    }));
  }
  function editTask() {}

  return (
    <main className="list-layout ">
      <div className="list-layout__header section__header">
        <h1 className="list-layout__header_title">{list.title}</h1>

        <FontAwesomeIcon
          icon={faPenToSquare}
          className="list-layout__header_icon"
          onClick={changeEditMode}
        />
      </div>

      <div className="list-layout__content">
        <div className="simple-list">
          <List
            contentArray={list.tasks}
            addItem={addTask}
            deleteItem={deleteTask}
          />
        </div>
      </div>

      <div className="list-layout__buttons">
        <button
          className="custom-button custom-button--big list-layout__buttons_discard-btn"
        >
          Discard Changes
        </button>

        <button className="custom-button custom-button--big list-layout__buttons_save-btn">
          Save Changes
        </button>
      </div>
    </main>
  );
}

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
