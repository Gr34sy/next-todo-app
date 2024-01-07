import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export function ListLayout(props) {
  return (
    <main className="main">
      <section
        className={
          props.enableEdit ? "list-layout list-layout--edit" : "list-layout"
        }
      >
        <div className="list-layout__header">
          <h1 className="section__header list-layout__title">{props.enableEdit && <FontAwesomeIcon icon={faPen}/>} {props.title}</h1>
          <button
            className="custom-button custom-button--big"
            onClick={props.onClick}
          >
            {props.enableEdit ? "Exit Editing" : "Edit"}
          </button>
        </div>

        <div className="list-layout__content">
            {props.children}
        </div>

        {props.enableEdit && (
          <button
            className="custom-button custom-button--big list-layout__save-btn"
            onClick={props.onClick}
          >
            Save and Exit
          </button>
        )}
      </section>
    </main>
  );
}
