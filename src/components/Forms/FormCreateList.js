import { FormLayout } from "@/components/Forms/FormLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { Dummy_List } from "@/utils/dummy-data";

import { useState } from "react";
import { List } from "../Lists/List";

export function FormCreateList({ formAction }) {
  const INITIAL_STATE = {
    type: "list",
    title: "",
    tasks: [],
  };
  const [formValues, setFormValues] = useState(INITIAL_STATE);

  function setTasks(updatedTasks) {
    setFormValues((prev) => ({
      ...prev,
      tasks: [...updatedTasks],
    }));
  }

  return (
    <FormLayout submitText="Create List" formAction={formAction}>
      <label className="form__label" htmlFor="form-title">
        <FontAwesomeIcon icon={faList} className="form__icon" />

        <input
          type="text"
          name="title"
          id="form-title"
          className="big-input"
          placeholder="List Title"
        />
      </label>

      <p className="form__p">
        <FontAwesomeIcon icon={faTag} className="form__icon" />
        Tasks
      </p>

      <List items={formValues.tasks} updateFunction={setTasks} />

      <div className="form__buttons">
        <button className="custom-button custom-button--big">Discard</button>

        <button
          className="custom-button custom-button--big"
        >
          Save
        </button>
      </div>
    </FormLayout>
  );
}
