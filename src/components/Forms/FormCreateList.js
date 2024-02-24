import { FormLayout } from "@/components/Forms/FormLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useRouter } from "next/router";
import { List } from "../Lists/List";

export function FormCreateList() {
  const INITIAL_STATE = {
    type: "list",
    title: "",
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

  function discardChanges(){
    router.reload();
  }

  async function addList(list){
    const response = await fetch('/api/lists', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    });

    const data = await response.json();
    console.log(data);
    router.push('/');
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

      <p className="form__p">
        <FontAwesomeIcon icon={faTag} className="form__icon" />
        Tasks
      </p>

      <List items={listValues.tasks} updateFunction={changeTasks} />

      <div className="form__buttons">
        <button className="custom-button custom-button--big" onClick={() => discardChanges()}>Discard</button>

        <button onClick={() => addList(listValues)}
          className="custom-button custom-button--big"
        >
          Save
        </button>
      </div>
    </FormLayout>
  );
}
