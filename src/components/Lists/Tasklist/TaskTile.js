import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faArrowRightFromBracket,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { List } from "../List";

import { useState } from "react";

export function TaskTile(props) {
  const [enableEdit, setEnableEdit] = useState(false);

  function handleClick() {
    setEnableEdit((prev) => !prev);
  }

  return (
    <div className={ enableEdit ? "task-tile task-tile--edit" : "task-tile"}>
      <div className="task-tile__header">
        <h2 className="task-tile__header_title">
          {enableEdit && <FontAwesomeIcon icon={faPen} />}{" "}
          Task Title
        </h2>
        <FontAwesomeIcon
          icon={enableEdit ? faArrowRightFromBracket : faPenToSquare}
          className="task-tile__edit_icon"
          onClick={handleClick}
        />

        <p className="task-tile__header_deadline">Deadline:</p>
        <p className="task-tile__header_date">22-2-2024</p>
      </div>

      <div className="task-tile__list">
        <List editMode={enableEdit} contentArray={["Do", "you?", "Paris", "Berlin","Hong Kong","Tokyo"]} />
      </div>
    </div>
  );
}
