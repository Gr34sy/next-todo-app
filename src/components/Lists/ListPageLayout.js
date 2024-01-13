import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export function ListPageLayout(props) {
  return (
    <main
      className={
        (props.editMode ? "list-layout list-layout--edit " : "list-layout ") +
        props.modifierClass
      }
    >
      <div className="list-layout__header">
        <h1 className="section__header list-layout__title">{props.editMode && <FontAwesomeIcon icon={faPen} />}{props.title}</h1>
        <button
          className="custom-button custom-button--big"
          onClick={props.onClick}
        >
          {props.editMode ? "Discard Changes" : "Edit"}
        </button>
      </div>

      <div className="list-layout__content">{props.children}</div>

      {props.editMode && (
        <button
          className="custom-button custom-button--big list-layout__save-btn"
          onClick={props.onClick}
        >
          Save Changes
        </button>
      )}
    </main>
  );
}
