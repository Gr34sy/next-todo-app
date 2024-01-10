import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  function handleClick() {
    setIsChecked((prev) => !prev);
  }

  return (
    <div
      onClick={props.clickAction || handleClick}
      className={isChecked ? "checkbox__div checked" : "checkbox__div"}
    >
      <FontAwesomeIcon className="checkbox__icon" icon={faCheck} />
    </div>
  );
}
