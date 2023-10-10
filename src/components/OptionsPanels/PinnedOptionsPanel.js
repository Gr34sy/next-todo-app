import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// checkboxes.forEach((checkbox) => checkbox.classList.remove("checked"));
//       if (pinnedLists.length <= 2) {
//         setPinnedLists((prevLists) => [...prevLists, clickedValue]);
//         checkboxes
//           .filter((checkbox) => checkbox != pinnedLists[0])
//           .forEach((checkbox) => checkbox.classList.remove("checked"));
//       } else {
//         setPinnedLists((prevLists) => [...prevLists.shift(), clickedValue]);
//         checkboxes
//           .filter(
//             (checkbox) =>
//               checkbox != pinnedLists[0] && checkbox != pinnedLists[1]
//           )
//           .forEach((checkbox) => checkbox.classList.remove("checked"));
//       }

export function PinnedOptionsPanel() {
  const [pinnedLists, setPinnedLists] = useState([]);
  const [pinnedTasklist, setPinnedTasklist] = useState(null);

  function pinnedListChangeHandler(e) {
    const clickedValue = e.target.value;
    
    if (pinnedLists.includes(clickedValue)) {
      clickedCheckbox.classList.remove("checked");
      setPinnedLists((prevLists) =>
        prevLists.filter((list) => list != clickedValue)
      );
      console.log(pinnedLists); // check
    } else {
      setPinnedLists((prevLists) => [
        clickedValue,
        ...prevLists.filter((value, i) => i < 1)
      ]);
      console.log(pinnedLists); // check
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
              <div className={pinnedLists.includes('pinned-list-1') ? 'checkmark__div checked' : 'checkmark__div'}>
              <FontAwesomeIcon className="checkmark__icon" icon={faCheck} />
            </div>
            <input
              className="custom-checkbox"
              type="checkbox"
              name="pinned-lists"
              id="pinned-list-1"
              value="pinned-list-1"
              onChange={pinnedListChangeHandler}
              checked={pinnedLists.includes("pinned-list-1") ? true : false}
            />
            <p className="menu-content__p">Tasklist 1</p>
          </label>

          <label htmlFor="pinned-list-2" className="menu-content__radio">
            <div className="menu-content__color-block color-block--default"></div>
            <div className={pinnedLists.includes('pinned-list-2') ? 'checkmark__div checked' : 'checkmark__div'}>
              <FontAwesomeIcon className="checkmark__icon" icon={faCheck} />
            </div>
            <input
              className="custom-checkbox"
              type="checkbox"
              name="pinned-lists"
              id="pinned-list-2"
              value="pinned-list-2"
              onChange={pinnedListChangeHandler}
              checked={pinnedLists.includes("pinned-list-2") ? true : false }
            />
            <p className="menu-content__p">Tasklist 2</p>
          </label>

          <label htmlFor="pinned-list-3" className="menu-content__radio">
            <div className="menu-content__color-block color-block--default"></div>
            <div className={pinnedLists.includes('pinned-list-3') ? 'checkmark__div checked' : 'checkmark__div'}>
              <FontAwesomeIcon className="checkmark__icon" icon={faCheck} />
            </div>
            <input
              className="custom-checkbox"
              type="checkbox"
              name="pinned-lists"
              id="pinned-list-3"
              value="pinned-list-3"
              onChange={pinnedListChangeHandler}
              checked={pinnedLists.includes("pinned-list-3") ? true : false }
            />
            <p className="menu-content__p">Tasklist 3</p>
          </label>

          <label htmlFor="pinned-list-4" className="menu-content__radio">
            <div className="menu-content__color-block color-block--default"></div>
            <div className={pinnedLists.includes('pinned-list-4') ? 'checkmark__div checked' : 'checkmark__div'}>
              <FontAwesomeIcon className="checkmark__icon" icon={faCheck} />
            </div>
            <input
              className="custom-checkbox"
              type="checkbox"
              name="pinned-lists"
              id="pinned-list-4"
              value="pinned-list-4"
              onChange={pinnedListChangeHandler}
              checked={pinnedLists.includes("pinned-list-4") ? true : false }
            />
            <p className="menu-content__p">Tasklist 4</p>
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
