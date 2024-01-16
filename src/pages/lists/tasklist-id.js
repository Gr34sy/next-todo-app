//Components
import { ListPageLayout } from "@/components/Lists/ListPageLayout";
import { AddTask } from "@/components/Lists/Tasklist/AddTask";
import { TaskTile } from "@/components/Lists/Tasklist/TaskTile";

//Functions
import { ObjectId } from "mongodb";
import { useState } from "react";
import { dbConnect } from "@/utils/dbConnect";

export default function TasklistPage(props) {
  const tasklist = props.tasklist;

  return (
    <ListPageLayout
      title={tasklist.title}
      modifierClass="list-layout--tasklist"
    >
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
            />
          ))}
        </div>
      </div>
    </ListPageLayout>
  );
}

export async function getStaticProps() {
  const client = await dbConnect();
  const db = client.db("ToDo");

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
