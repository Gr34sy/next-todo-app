
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";

// components
import { FormLayout } from "@/components/Forms/FormLayout";
import { List } from "../Lists/List";

// hooks
import { useState } from "react";
import { useRouter } from "next/router";

export function FormCreateTasklist() {
  const INITIAL_STATE = {
    type: "tasklist",
    title: "",
    deadline: "",
    description: "",
    tasks: [],
  };
  const [listValues, setListValues] = useState(INITIAL_STATE);
  const router = useRouter();

  //Changing Tasks and Title
  function changeTasks(updatedTasks) {
    setListValues((prev) => ({
      ...prev,
      tasks: [...updatedTasks],
    }));
  }
  function changeTitle(e){
    setListValues((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  }
  function changeDeadline(e){
    setListValues((prev) => ({
      ...prev,
      deadline: e.target.value,
    }));
  }
  function changeDescription(e){
    setListValues((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  }

  function discardChanges(){
    router.reload();
  }

  async function addTasklist(tasklist){
    const response = await fetch('/api/lists', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tasklist),
    });

    const data = await response.json();
    console.log(data);
    discardChanges();
  }


  return (
    <FormLayout submitText="Create List">
      <label className="form__label" htmlFor="form-title">
        <FontAwesomeIcon icon={faList} className="form__icon" />

        <input
          type="text"
          name="title"
          id="form-title"
          className="big-input"
          placeholder="List Title"
          value={listValues.title}
          onChange={changeTitle}
        />
      </label>

      <label className="form__label" htmlFor="form-deadline">
        <FontAwesomeIcon icon={faCalendarDays} className="form__icon" />

        <input
          type="text"
          name="title"
          id="form-deadline"
          className="big-input"
          placeholder="Deadline"
          value={listValues.deadline}
          onChange={changeDeadline}
        />
      </label>

      <label className="form__label" htmlFor="form-description">
        <FontAwesomeIcon icon={faNoteSticky} className="form__icon textarea_icon" />

        <textarea

          rows="4"
          name="title"
          id="form-description"
          className="big-input"
          placeholder="Description"
          value={listValues.description}
          onChange={changeDescription}
        />
      </label>

      <p className="form__p">
        <FontAwesomeIcon icon={faTag} className="form__icon" />
        Tasks
      </p>

      <List items={listValues.tasks} updateFunction={changeTasks} />

      <div className="form__buttons">
        <button className="custom-button custom-button--big" onClick={() => discardChanges()}>Discard</button>

        <button onClick={() => addTasklist(listValues)}
          className="custom-button custom-button--big"
        >
          Save
        </button>
      </div>
    </FormLayout>
  );
}