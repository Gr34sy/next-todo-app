//icons
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//components
import { List } from "../List";
//hooks
import { useState } from "react";

export function AddTask({ addTask, cancelTask }) {
  const INITIAL_TASK = {
    name: "",
    deadline: "",
    isDone: "",
    operations: [],
  };
  const [displayContainer, setDisplayContainer] = useState(false);
  const [task, setTask] = useState(INITIAL_TASK);

  function handleDisplay() {
    setDisplayContainer((prevState) => !prevState);
  }

  //updating task state
  function changeName(e) {
    setTask((prevTask) => ({
      ...prevTask,
      name: e.target.value,
    }));
  }
  function changeDeadline(e) {
    setTask((prevTask) => ({
      ...prevTask,
      deadline: e.target.value,
    }));
  }
  function updateOperations(operations) {
    setTask((prevTask) => ({
      ...prevTask,
      operations: operations,
    }));
  }

  function handleAddTask() {
    if (typeof addTask === "function") {
      addTask(task);
    }
  }
  function handleCancelAddTask() {
    if (typeof addTask === "function") {
      cancelTask(task);
    }
  }

  return (
    <div className="add-task">
      <h2 className="add-task__header" onClick={handleDisplay}>
        New Task
        <FontAwesomeIcon icon={displayContainer ? faCaretUp : faCaretDown} />
      </h2>
      {displayContainer && (
        <div className="add-task__container">
          <div className="add-task__labels">
            <label
              htmlFor="add-task__taskname"
              className="add-task__labels_label"
            >
              <p>Name:</p>
              <input
                type="text"
                id="add-task__taskname"
                onChange={changeName}
                value={task.name}
              />
            </label>

            <label
              htmlFor="add-task__deadline"
              className="add-task__labels_label"
            >
              <p>Deadline:</p>
              <input
                type="text"
                id="add-task__deadline"
                onChange={changeDeadline}
                value={task.deadline}
              />
            </label>
          </div>

          <div className="add-task__add-operation">
            <p>Operations:</p>
            <List items={task.operations} updateFunction={updateOperations} />
          </div>

          <div className="add-task__buttons">
            <button
              type="submit"
              className="custom-button custom-button--big add-task__button"
              onClick={handleAddTask}
            >
              Add
            </button>
            <button
              className="custom-button custom-button--big add-task__button"
              onClick={handleCancelAddTask}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
