import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export function ListPageLayout(props) {
  return (
    <main className={"list-layout " + (props.modifierClass || "")}>
      <div className="list-layout__header section__header">
        <h1 className="list-layout__header_title">{props.title}</h1>

        <FontAwesomeIcon
          icon={faPenToSquare}
          className="list-layout__header_icon"
          onClick={props.changeEditMode}
        />
      </div>


      <div className="list-layout__content">{props.children}</div>


      <div className="list-layout__buttons">
        <button
          className="custom-button custom-button--big list-layout__buttons_discard-btn"
          onClick={props.onClick}
        >
          Discard Changes
        </button>

        <button
          className="custom-button custom-button--big list-layout__buttons_save-btn"
        >
          Save Changes
        </button>
      </div>
    </main>
  );
}
