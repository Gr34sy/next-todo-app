import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Checkbox({isChecked}) {
  return (
    <div
      className={isChecked ? "checkbox__div checked" : "checkbox__div"}
    >
      <FontAwesomeIcon className="checkbox__icon" icon={faCheck} />
    </div>
  );
}
