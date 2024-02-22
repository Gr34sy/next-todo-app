//icons
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//components
import { List } from "../List";
//hooks
import { useState } from "react";


export function AddTask({addTask}) {
  const INITIAL_TASK = {
    name: "",
    deadline: "",
    isDone: "",
    operations: [],
  };
  const [displayContainer, setDisplayContainer] = useState(false);
  const [task, setTask] = useState(INITIAL_TASK);

  function handleDisplay(){
    setDisplayContainer((prevState) => !prevState);
  }

  function updateOperations(operations){
    setTask((prevTask) => ({
      ...prevTask,
      operations: operations,
    }))
  }

  function handleAddTask(){
    if(typeof addTask ==='function'){
      addTask(task);
    }
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
          <List items={task.operations} updateFunction={updateOperations} />
          <button type="submit" className="custom-button custom-button--small add-task__add-operation_button" onClick={handleAddTask}> Add </button>
        </div>
      </div>}
    </div>
  );
}
