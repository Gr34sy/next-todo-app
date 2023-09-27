import { ThemeOptionsPanel } from "@/components/OptionsPanels/ThemeOptionsPanel";
import { LogOutPanel } from "@/components/OptionsPanels/LogOutPanel";
import { useState } from "react";
import { PinnedOptionsPanel } from "@/components/OptionsPanels/PinnedOptionsPanel";

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
            {chosenMenuItem === "pinned-lists" && <PinnedOptionsPanel />}
            {chosenMenuItem === "color-themes" && <ThemeOptionsPanel />}
            {chosenMenuItem === "log-out" && <LogOutPanel />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OptionsPage;
