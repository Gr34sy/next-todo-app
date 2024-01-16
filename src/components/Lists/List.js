import { Checkbox } from "@/components/Checkbox/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faSquarePlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function List({ contentArray, listType, addItem, deleteItem }) {
  const [inputValue, setInputValue] = useState("");

  function inputValueChange(e){
    setInputValue(e.target.value);
  }

  function handleAddItem(){
    addItem(inputValue);
    setInputValue("");
  }

  
  function ListLine(props) {
      return (
        <li className="list__item" data-id={props.itemId}>
          <Checkbox isChecked={props.isDone} />
          {props.content}

          <div className="list__item_icons">
          <FontAwesomeIcon icon={faPen} className="list__item_pen-icon" />
          <FontAwesomeIcon icon={faTrash} className="list__item_trash-icon" onClick={() => deleteItem(props.itemId)}/>
          </div>
        </li>
      );
  }

  return (
    <div className={"list " + (listType || "")}>
      <div className="list__add-item">
        <input type="text" className="add-item__input" value={inputValue} onChange={inputValueChange}/>
        <FontAwesomeIcon icon={faSquarePlus} className="add-item__button" onClick={handleAddItem}/>
      </div>

      <ul className="list__container">
        {contentArray.map((content) => (
          <ListLine
            content={content.name}
            itemId={content.id}
            key={content.id}
            isDone={content.isDone}
          />
        ))}
      </ul>
    </div>
  );
}
