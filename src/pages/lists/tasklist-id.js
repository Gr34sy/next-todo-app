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
        <div className="task-list__deadline">
          <p>Deadline:</p>

          <p>22-02-2024</p>
        </div>
        <div className="task-list__description">
          <p>
            Description
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sapiente dolor earum iure esse quis excepturi saepe totam maiores tenetur!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sapiente dolor earum iure esse quis excepturi saepe totam maiores tenetur!
          </p>
        </div>
        {enableEdit && <AddTask />}
        <TaskTile editMode={enableEdit} />
        <TaskTile editMode={enableEdit} />
        <TaskTile editMode={enableEdit} />
        <TaskTile editMode={enableEdit} />
      </div>
    </ListPageLayout>
  );
}
