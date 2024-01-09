import { ListPageLayout } from "@/components/Lists/ListPageLayout";
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
    >
      <TaskTile editMode={enableEdit}/>
    </ListPageLayout>
  );
}
