//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

//components
import { List } from "../List";
import { Checkbox } from "@/components/Checkbox/Checkbox";

//hooks
import { useState } from "react";
import { useEffect } from "react";

export function TaskTile(props) {
  const INITIAL_TASK = {
    id: props.id,
    name: props.name,
    deadline: props.deadline,
    isDone: props.isDone,
    operations: props.operations,
  };
  const [editMode, setEditMode] = useState(false);
  const [task, setTask] = useState(INITIAL_TASK);

  // updating task in tasklist state
  function handleTaskUpdate(){
    if(typeof props.updateFunction === 'function'){
      props.updateFunction(task);
    }
  }
  useEffect(() => {
    handleTaskUpdate();
  },[task])

  //updating operations in task state
  function handleOperationsUpdate(operations){
    setTask((prevTask) => ({
      ...prevTask,
      operations: operations,
    }))
  }

  //Changing task name, deadline and isDone
  function changeName(e){
    setTask(prevTask => ({
      ...prevTask,
      name: e.target.value,
    }))
  }
  function changeDeadline(e){
    setTask(prevTask => ({
      ...prevTask,
      deadline: e.target.value,
    }))
  }
  function changeIsDone(){
    setTask(prevTask => ({
      ...prevTask,
      isDone: !prevTask.isDone,
    }))
  }


  return (
    <div className="task-tile">
      <div className="task-tile__header">
        <div className="task-tile__header_title">
          <Checkbox isChecked={task.isDone} onClick={changeIsDone}/>
          <h2>
          {editMode && (
              <input
                type="text"
                value={task.name}
                onChange={changeName}
              />
            )}
            {!editMode && task.name}
          </h2>
          <FontAwesomeIcon
            icon={editMode ? faArrowRightFromBracket : faPenToSquare}
            className="task-tile__header_edit-icon"
            onClick={() => setEditMode((prev) => !prev)}
          />
        </div>

        <div className="task-tile__header_deadline">
          <p>Deadline:</p>
          <p className="task-tile__header_date">
            {editMode && (
              <input
                type="text"
                value={task.deadline}
                onChange={changeDeadline}
              />
            )}
            {!editMode && task.deadline}
          </p>
        </div>
      </div>

      <div className="task-tile__container">
        <p className="task-tile__container_p">Operations</p>
        <List operationsList={true} items={task.operations} updateFunction={handleOperationsUpdate}/>
      </div>
    </div>
  );
}
