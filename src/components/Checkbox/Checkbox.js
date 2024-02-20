import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Checkbox({isChecked, onClick}) {

  function handleClick(){
    if(typeof onClick === 'function'){
      onClick();
    }
  }

  return (
    <div
      className={isChecked ? "checkbox__div checked" : "checkbox__div"}
      onClick={handleClick}
    >
      <FontAwesomeIcon className="checkbox__icon" icon={faCheck} />
    </div>
  );
}
