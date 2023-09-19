import { ThemeOptionsPanel } from "@/components/OptionsPanels/ThemeOptionsPanel";
import { useState } from "react";

function OptionsPage() {
  const [chosenMenuItem, setChosenMenuItem] = useState("pinned-lists");


  function menuItemHandler(e) {
    e.preventDefault();
    if (e.target.dataset.value !== "log-out") {
      setChosenMenuItem(e.target.dataset.value);
    } else {
      setChosenMenuItem(null);
    }
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

          <div
            className={
              chosenMenuItem === "pinned-lists"
                ? "menu_item__content"
                : "menu_item__content d-none"
            }
          >
            Pinned
          </div>

          <div
            className={
              chosenMenuItem === "color-themes"
                ? "menu_item__content"
                : "menu_item__content d-none"
            }
          >
            <ThemeOptionsPanel />
          </div>

        </div>
      </div>
    </section>
  );
}

export default OptionsPage;
