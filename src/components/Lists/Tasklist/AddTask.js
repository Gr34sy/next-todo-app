import { List } from "../List";

export function AddTask() {
  return (
    <div className="add-task">
      <h2 className="add-task__header">Adding New Task</h2>
      <div className="add-task__container">
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
            <textarea type="text" rows="10" id="add-task__description" />
          </label>
        </div>

        <div className="add-task__add-operation">
          <p>Add Operation:</p>
          <List
            editMode={true}
            contentArray={["Operation 1", "Operation 2", "Operation 3"]}
          />
          <button type="submit" className="custom-button custom-button--small add-task__add-operation_button" > Save Task </button>
        </div>
      </div>
    </div>
  );
}
