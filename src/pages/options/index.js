import { useState } from "react";

function OptionsPage() {
  const [chosenMenuItem, setChosenMenuItem] = useState("pinned-lists");

  function themeChangeHandler() {}

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
            <h2 className="menu-content__h2">Choose Your Theme</h2>
            <div className="menu-content__themes">
              <label htmlFor="theme-default" className="menu-content__radio">
                <div className="menu-content__color-block color-block--default"></div>
                <input
                  type="radio"
                  name="color-themes"
                  id="theme-default"
                  value="default"
                />
                <p className="menu-content__p">Default</p>
              </label>

              <label htmlFor="theme-nightmode" className="menu-content__radio">
                <div className="menu-content__color-block color-block--nightmode"></div>
                <input
                  type="radio"
                  name="color-themes"
                  id="theme-nightmode"
                  value="nightmode"
                />
                <p className="menu-content__p">Nightmode</p>
              </label>

              <label
                htmlFor="theme-celestial-blue"
                className="menu-content__radio"
              >
                <div className="menu-content__color-block color-block--celestial-blue"></div>
                <input
                  type="radio"
                  name="color-themes"
                  id="theme-celestial-blue"
                  value="celestial-blue"
                />
                <p className="menu-content__p">Celestial Blue</p>
              </label>

              <label
                htmlFor="theme-midnight-green"
                className="menu-content__radio"
              >
                <div className="menu-content__color-block color-block--midnight-green"></div>
                <input
                  type="radio"
                  name="color-themes"
                  id="theme-midnight-green"
                  value="midnight-green"
                />
                <p className="menu-content__p">Midnight Green</p>
              </label>

              <label
                htmlFor="theme-tiffany-blue"
                className="menu-content__radio"
              >
                <div className="menu-content__color-block color-block--tiffany-blue"></div>
                <input
                  type="radio"
                  name="color-themes"
                  id="theme-tiffany-blue"
                  value="tiffany-blue"
                />
                <p className="menu-content__p">Tiffany Blue</p>
              </label>

              <label htmlFor="theme-pinky" className="menu-content__radio">
                <div className="menu-content__color-block color-block--pinky"></div>
                <input
                  type="radio"
                  name="color-themes"
                  id="theme-pinky"
                  value="pinky"
                />
                <p className="menu-content__p">Pinky</p>
              </label>

              <label htmlFor="theme-orange" className="menu-content__radio">
                <div className="menu-content__color-block color-block--orange"></div>
                <input
                  type="radio"
                  name="color-themes"
                  id="theme-orange"
                  value="orange"
                />
                <p className="menu-content__p">Orange</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OptionsPage;
