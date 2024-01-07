import React from "react";

export function ListLayout(props) {
  return (
    <main className="main">
      <section className="list-layout">
        <div className="list-layout__header">
          <h1 className="section__header list-layout__title">{props.title}</h1>
          <button className="custom-button custom-button--big" onClick={props.onClick}>
            Edit
          </button>
        </div>

        
        {props.children}
      </section>
    </main>
  );
}
