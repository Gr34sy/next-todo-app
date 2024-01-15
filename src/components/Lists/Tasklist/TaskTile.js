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

  return (
    <div className="task-tile">
      <div className="task-tile__header">
        <div className="task-tile__header_title">
          <Checkbox isChecked={props.isDone} />
          <h2>{props.name}</h2>
          <FontAwesomeIcon
          icon={faPenToSquare}
          className="task-tile__header_edit-icon"
        />
        </div>

        <div className="task-tile__header_deadline">
          <p>Deadline:</p>
          <p className="task-tile__header_date">{props.deadline}</p>
        </div>
      </div>

      <List contentArray={props.operations} />
    </div>
  );
}
