//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

//Components
import { AddTask } from "@/components/Lists/Tasklist/AddTask";
import { TaskTile } from "@/components/Lists/Tasklist/TaskTile";

//Functions
import { ObjectId } from "mongodb";
import { useState } from "react";
import { dbConnect } from "@/utils/db";

export default function TasklistPage(props) {
  const tasklist = props.tasklist;

  function updateFunc(){
    return [];
  }

  return (
    <main className="list-layout list-layout--tasklist">
      <div className="list-layout__header section__header">
        <h1 className="list-layout__header_title">{tasklist.title}
        </h1>

        <FontAwesomeIcon
          icon={faPenToSquare}
          className="list-layout__header_icon"
        />
      </div>

      <div className="task-list">
        <div className="task-list__deadline">
          <p>Deadline:</p>

          <p>{tasklist.deadline}</p>
        </div>
        <div className="task-list__description">
          <p>Description</p>

          <p>{tasklist.description}</p>
        </div>

        <AddTask />

        <div className="task-list__tasks">
          {tasklist.tasks.map((task) => (
            <TaskTile
              name={task.name}
              deadline={task.deadline}
              isDone={task.isDone}
              itemId={task.id}
              operations={task.operations}
              key={task.id}
              updateFunction={updateFunc}
            />
          ))}
        </div>
      </div>

      <div className="list-layout__buttons">
        <button className="custom-button custom-button--big list-layout__buttons_discard-btn">
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
  const db = await dbConnect();

  const listId = new ObjectId("65a6731eb6a8062447227713");
  const list = await Object(
    db.collection("Dummy Tasklist").findOne({ _id: listId })
  );
  console.log(list);
  client.close();
  return {
    props: {
      tasklist: {
        list_id: list._id.toString(),
        title: list.title,
        deadline: list.deadline,
        description: list.description,
        tasks: list.tasks,
      },
    },
  };
}
