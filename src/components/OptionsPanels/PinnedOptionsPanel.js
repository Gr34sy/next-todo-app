import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function PinnedOptionsPanel() {
  const [pinnedLists, setPinnedLists] = useState([]);
  const [pinnedTasklist, setPinnedTasklist] = useState(null);

  function pinnedListChangeHandler(e) {
    const clickedValue = e.target.value;
    const clickedCheckbox = document.querySelector(
      `.pinned-panel__lists-radios [for=${clickedValue}] .checkmark__div`
    );

    if (pinnedLists.includes(e.target.value)) {
      clickedCheckbox.classList.remove("checked");

      setPinnedLists((prevLists) =>
        prevLists.filter((list) => list != clickedValue)
      );
    } else {
      const checkboxes = Array.from(
        document.querySelectorAll(".pinned-panel__lists-radios .checkmark__div")
      );

      checkboxes.forEach((checkbox) => checkbox.classList.remove("checked"));
      if (pinnedLists.length <= 1) {
        setPinnedLists((prevLists) => [...prevLists, clickedValue]);
        checkboxes
          .filter((checkbox) => checkbox != pinnedLists[0])
          .forEach((checkbox) => checkbox.classList.remove("checked"));
      } else {
        setPinnedLists((prevLists) => [...prevLists.shift(), clickedValue]);
        checkboxes
          .filter(
            (checkbox) =>
              checkbox != pinnedLists[0] && checkbox != pinnedLists[1]
          )
          .forEach((checkbox) => checkbox.classList.remove("checked"));
      }
      clickedCheckbox.classList.add("checked");
    }
  }

  function pinnedTasklistChangeHandler(e) {
    setPinnedTasklist(e.target.value);
  }

  return (
    <div className="options__pinned-panel">
      <div className="pinned-panel__radios">
        <div className="pinned-panel__lists-radios">
          <h2 className="menu-content__h2">Set your pinned simple lists</h2>

          <label htmlFor="pinned-list-1" className="menu-content__radio">
            <div className="menu-content__color-block color-block--default"></div>
            <div className="checkmark__div">
              <FontAwesomeIcon className="checkmark__icon" icon={faCheck} />
            </div>
            <input
              className="custom-checkbox"
              type="checkbox"
              name="pinned-lists"
              id="pinned-list-1"
              value="pinned-list-1"
              onChange={pinnedListChangeHandler}
              checked={pinnedLists === "pinned-list-1"}
            />
            <p className="menu-content__p">Tasklist 1</p>
          </label>

          <label htmlFor="pinned-list-2" className="menu-content__radio">
            <div className="menu-content__color-block color-block--default"></div>
            <div className="checkmark__div">
              <FontAwesomeIcon className="checkmark__icon" icon={faCheck} />
            </div>
            <input
              className="custom-checkbox"
              type="checkbox"
              name="pinned-lists"
              id="pinned-list-2"
              value="pinned-list-2"
              onChange={pinnedListChangeHandler}
              checked={pinnedLists === "pinned-list-2"}
            />
            <p className="menu-content__p">Tasklist 2</p>
          </label>
        </div>

        <div className="pinned-panel__tasklists-radios">
          <h2 className="menu-content__h2">Set your pinned tasklist</h2>

          <label htmlFor="pinned-tasklist-1" className="menu-content__radio">
            <div className="menu-content__color-block color-block--default"></div>
            <input
              type="radio"
              name="pinned-lists"
              id="pinned-tasklist-1"
              value="pinned-tasklist-1"
              onChange={pinnedTasklistChangeHandler}
              checked={pinnedTasklist === "pinned-tasklist-1"}
            />
            <p className="menu-content__p">Tasklist 1</p>
          </label>

          <label htmlFor="pinned-tasklist-2" className="menu-content__radio">
            <div className="menu-content__color-block color-block--default"></div>
            <input
              type="radio"
              name="pinned-lists"
              id="pinned-tasklist-2"
              value="pinned-tasklist-2"
              onChange={pinnedTasklistChangeHandler}
              checked={pinnedTasklist === "pinned-tasklist-2"}
            />
            <p className="menu-content__p">Tasklist 2</p>
          </label>

          <label htmlFor="pinned-tasklist-3" className="menu-content__radio">
            <div className="menu-content__color-block color-block--default"></div>
            <input
              type="radio"
              name="pinned-lists"
              id="pinned-tasklist-3"
              value="pinned-tasklist-3"
              onChange={pinnedTasklistChangeHandler}
              checked={pinnedTasklist === "pinned-tasklist-3"}
            />
            <p className="menu-content__p">Tasklist 3</p>
          </label>
        </div>
      </div>

      <div className="options__themes-panel_buttons">
        <button className="custom-button custom-button--small">
          Save Changes
        </button>
      </div>
    </div>
  );
}
