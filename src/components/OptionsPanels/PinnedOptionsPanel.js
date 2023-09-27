import { useState } from "react";

export function PinnedOptionsPanel() {
  const [chosenColorTheme, setChosenColorTheme] = useState("");
  const [pinnedLists, setPinnedLists] = useState(null);
  const [pinedTasklist, setPinnedTasklist] = useState(null);

  function pinnedListChangeHandler(e) {
    setPinnedLists(e.target.value);
  }

  return (
    <div className="options__pinned-panel">
      <div className="pinned-panel__radios">
        <div className="pinned-panel__lists-radios">
          <h2 className="menu-content__h2">Set your pinned simple lists</h2>
          <label htmlFor="pinned-list-1" className="menu-content__radio">
            <div className="menu-content__color-block color-block--default"></div>
            <input
              type="radio"
              name="pinned-lists"
              id="pinned-list-1"
              value="pinned-list-1"
              onChange={pinnedListChangeHandler}
              checked={pinnedLists === "pinned-list-1"}
            />
            <p className="menu-content__p">List 1</p>
          </label>

          <label htmlFor="pinned-list-2" className="menu-content__radio">
            <div className="menu-content__color-block color-block--pinky"></div>
            <input
              type="radio"
              name="pinned-lists"
              id="pinned-list-2"
              value="pinned-list-2"
              onChange={pinnedListChangeHandler}
              checked={pinnedLists === "pinned-list-2"}
            />
            <p className="menu-content__p">List 2</p>
          </label>

          <label htmlFor="pinned-list-3" className="menu-content__radio">
            <div className="menu-content__color-block color-block--pinky"></div>
            <input
              type="radio"
              name="pinned-lists"
              id="pinned-list-3"
              value="pinned-list-3"
              onChange={pinnedListChangeHandler}
              checked={pinnedLists === "pinned-list-3"}
            />
            <p className="menu-content__p">List 3</p>
          </label>

          <label htmlFor="pinned-list-4" className="menu-content__radio">
            <div className="menu-content__color-block color-block--pinky"></div>
            <input
              type="radio"
              name="pinned-lists"
              id="pinned-list-4"
              value="pinned-list-4"
              onChange={pinnedListChangeHandler}
              checked={pinnedLists === "pinned-list-4"}
            />
            <p className="menu-content__p">List 4</p>
          </label>

          <label htmlFor="pinned-list-5" className="menu-content__radio">
            <div className="menu-content__color-block color-block--pinky"></div>
            <input
              type="radio"
              name="pinned-lists"
              id="pinned-list-5"
              value="pinned-list-5"
              onChange={pinnedListChangeHandler}
              checked={pinnedLists === "pinned-list-5"}
            />
            <p className="menu-content__p">List 5</p>
          </label>

          <label htmlFor="pinned-list-6" className="menu-content__radio">
            <div className="menu-content__color-block color-block--orange"></div>
            <input
              type="radio"
              name="pinned-lists"
              id="pinned-list-6"
              value="pinned-list-6"
              onChange={pinnedListChangeHandler}
              checked={pinnedLists === "pinned-list-6"}
            />
            <p className="menu-content__p">List 6</p>
          </label>
        </div>

        <div className="pinned-panel__tasklists-radios">
          <h2 className="menu-content__h2">Set your pinned tasklist</h2>
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
