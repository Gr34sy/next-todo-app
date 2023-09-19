import { ThemeOptionsPanel } from "@/components/OptionsPanels/ThemeOptionsPanel";
import { useState } from "react";

function OptionsPage() {
  const [chosenMenuItem, setChosenMenuItem] = useState("pinned-lists");

  function menuItemHandler(e) {
    e.preventDefault();
    setChosenMenuItem(e.target.dataset.value);
  }

  return (
    <section className="section options">
      <h1 className="section__header">Options</h1>

      <div className="options__wrapper">
        <div className="options__content">
          <div className="options__menu">
            <div
              className="options__menu_item"
              data-value="pinned-lists"
              onClick={menuItemHandler}
            >
              Pinned Lists
            </div>

            <div
              className="options__menu_item"
              data-value="color-themes"
              onClick={menuItemHandler}
            >
              Color Themes
            </div>

            <div
              className="options__menu_item"
              data-value="log-out"
              onClick={menuItemHandler}
            >
              Log Out
            </div>
          </div>

          <div className="menu_item__content">
            {chosenMenuItem === "pinned-lists" && <p>Pinned</p>}
            {chosenMenuItem === "color-themes" && <ThemeOptionsPanel />}
            {chosenMenuItem === "log-out" && (
              <div>
                <p>Are you sure to log out?</p>
                <button>Yes</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OptionsPage;
