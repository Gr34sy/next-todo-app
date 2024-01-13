import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faArrowRightFromBracket,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { List } from "../List";
import { Checkbox } from "@/components/Checkbox/Checkbox";

import { useState } from "react";

export function TaskTile(props) {
  const [enableEdit, setEnableEdit] = useState(false);

  function handleClick() {
    setEnableEdit((prev) => !prev);
  }

  return (
    <div className={enableEdit ? "task-tile task-tile--edit" : "task-tile"}>
      <div className="task-tile__header">
        <div className="task-tile__header_title">
          {enableEdit && <FontAwesomeIcon icon={faPen} />}{" "}
          {!enableEdit && <Checkbox isChecked={props.isDone} />}
          <h2>{props.name}</h2>
          <FontAwesomeIcon
          icon={enableEdit ? faArrowRightFromBracket : faPenToSquare}
          className="task-tile__header_edit-icon"
          onClick={handleClick}
        />
        </div>

        <div className="task-tile__header_deadline">
          <p>Deadline:</p>
          <p className="task-tile__header_date">{props.deadline}</p>
        </div>
      </div>

      <List editMode={enableEdit} contentArray={props.operations} />
    </div>
  );
}
