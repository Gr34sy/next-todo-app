import { useState } from "react";

function OptionsPage() {
  const [chosenMenuItem, setChosenMenuItem] = useState(null);

  function colorThemeHandler(e) {
    e.preventDefault();
    document.body.className = "";
    document.body.classList.add(e.target.dataset.value);
  }

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
            Themes
            <div>
              <button
                className="custom-link"
                data-value="default"
                onClick={colorThemeHandler}
              >
                Default
              </button>

              <button
                className="custom-link"
                data-value="celestial-blue"
                onClick={colorThemeHandler}
              >
                Celestial Blue
              </button>

              <button
                className="custom-link"
                data-value="midnight-green"
                onClick={colorThemeHandler}
              >
                Midnight Green
              </button>

              <button
                className="custom-link"
                data-value="nightmode"
                onClick={colorThemeHandler}
              >
                Nightmode
              </button>

              <button
                className="custom-link"
                data-value="pinky"
                onClick={colorThemeHandler}
              >
                Pinky
              </button>

              <button
                className="custom-link"
                data-value="orange"
                onClick={colorThemeHandler}
              >
                Orange
              </button>

              <button
                className="custom-link"
                data-value="tiffany-blue"
                onClick={colorThemeHandler}
              >
                Tiffany Blue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OptionsPage;
