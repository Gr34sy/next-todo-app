import { List } from "../List";
import { useState } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AddTask() {
  const [displayContainer, setDisplayContainer] = useState(false);

  function handleDisplay(){
    setDisplayContainer((prevState) => !prevState);
  }

  return (
    <div className="add-task">
      <h2 className="add-task__header" onClick={handleDisplay}>
        Adding New Task
        <FontAwesomeIcon icon ={displayContainer ? faCaretUp : faCaretDown} />
      </h2>
      {displayContainer && <div className="add-task__container">
        <div className="add-task__labels">
          <label htmlFor="add-task__taskname" className="add-task__labels_label">
            <p>Task name:</p>
            <input type="text" id="add-task__taskname"/>
          </label>

          <label htmlFor="add-task__deadline" className="add-task__labels_label">
            <p>Task deadline:</p>
            <input type="date" id="add-task__deadline"/>
          </label>

          <label htmlFor="add-task__description" className="add-task__labels_label">
            <p>Task description:</p>
            <textarea type="text" rows="6" id="add-task__description" />
          </label>
        </div>

        <div className="add-task__add-operation">
          <p>Add Operation:</p>
          <List
            items={['Twpj' , 'Stary', 'Coco Jumbo']}
          />
          <button type="submit" className="custom-button custom-button--small add-task__add-operation_button" > Save Task </button>
        </div>
      </div>}
    </div>
  );
}
