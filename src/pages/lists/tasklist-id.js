import { ListPageLayout } from "@/components/Lists/ListPageLayout";
import { AddTask } from "@/components/Lists/Tasklist/AddTask";
import { TaskTile } from "@/components/Lists/Tasklist/TaskTile";
import { useState } from "react";
import { Dummy_Tasklist } from "@/utils/dummy-data";

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

export function getStaticProps() {
  return {
    props: {
      tasklist: Dummy_Tasklist,
    },
  };
}
