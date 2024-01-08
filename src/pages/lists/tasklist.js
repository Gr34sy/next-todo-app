import { ListLayout } from "@/components/ListLayout/ListLayout";
import { useState } from "react";

export default function Tasklist() {
  const [enableEdit, setEnableEdit] = useState(false);

  function handleClick() {
    setEnableEdit((prev) => !prev);
  }

  return (
    <ListLayout
      title={"Tasklist"}
      onClick={handleClick}
      enableEdit={enableEdit}
    >
      <div className="task-list"></div>
    </ListLayout>
  );
}
