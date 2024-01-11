import { ListPageLayout } from "@/components/Lists/ListPageLayout";
import { AddTask } from "@/components/Lists/Tasklist/AddTask";
import { TaskTile } from "@/components/Lists/Tasklist/TaskTile";
import { useState } from "react";

export default function TasklistPage() {
  const [enableEdit, setEnableEdit] = useState(false);

  function handleClick() {
    setEnableEdit((prev) => !prev);
  }

  return (
    <ListPageLayout
      title={"Tasklist"}
      onClick={handleClick}
      editMode={enableEdit}
      modifierClass="list-layout--tasklist"
    >
      <div className="task-list">
        <AddTask />
        <TaskTile editMode={enableEdit} />
        <TaskTile editMode={enableEdit} />
        <TaskTile editMode={enableEdit} />
        <TaskTile editMode={enableEdit} />
      </div>
    </ListPageLayout>
  );
}
