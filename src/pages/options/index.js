import { useState, useEffect } from "react";
import { Tabs } from "@/components/Tabs/Tabs";

function OptionsPage() {
  const [chosenColorTheme, setChosenColorTheme] = useState('default');

  useEffect(() => {
    setChosenColorTheme(document.body.className);
  }, [])

  function themeChangeHandler(e) {
    setChosenColorTheme(e.target.value);

    document.body.className = "";
    document.body.className = `${e.target.value}`;
  }

  function LogOutPanel() {
    return (
      <div className="options__logout-panel">
        <p className="menu-content__h2">Are you sure to log out?</p>
        <button className="custom-button custom-button--big">
          Yes, I'm sure
        </button>
      </div>
    );
  }

  function ThemeOptionsPanel() {
    return (
      <div className="options__themes-panel">
        <div className="themes-panel__radios">
          <h2 className="menu-content__h2">Choose Your Theme</h2>
          <label htmlFor="theme-default" className="menu-content__radio">
            <div className="menu-content__color-block color-block--default"></div>
            <input
              type="radio"
              name="color-themes"
              id="theme-default"
              value="default"
              onChange={themeChangeHandler}
              checked={chosenColorTheme === "default"}
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
              onChange={themeChangeHandler}
              checked={chosenColorTheme === "nightmode"}
            />
            <p className="menu-content__p">Nightmode</p>
          </label>

          <label htmlFor="theme-celestial-blue" className="menu-content__radio">
            <div className="menu-content__color-block color-block--celestial-blue"></div>
            <input
              type="radio"
              name="color-themes"
              id="theme-celestial-blue"
              value="celestial-blue"
              onChange={themeChangeHandler}
              checked={chosenColorTheme === "celestial-blue"}
            />
            <p className="menu-content__p">Celestial Blue</p>
          </label>

          <label htmlFor="theme-midnight-green" className="menu-content__radio">
            <div className="menu-content__color-block color-block--midnight-green"></div>
            <input
              type="radio"
              name="color-themes"
              id="theme-midnight-green"
              value="midnight-green"
              onChange={themeChangeHandler}
              checked={chosenColorTheme === "midnight-green"}
            />
            <p className="menu-content__p">Midnight Green</p>
          </label>

          <label htmlFor="theme-tiffany-blue" className="menu-content__radio">
            <div className="menu-content__color-block color-block--tiffany-blue"></div>
            <input
              type="radio"
              name="color-themes"
              id="theme-tiffany-blue"
              value="tiffany-blue"
              onChange={themeChangeHandler}
              checked={chosenColorTheme === "tiffany-blue"}
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
              onChange={themeChangeHandler}
              checked={chosenColorTheme === "pinky"}
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
              onChange={themeChangeHandler}
              checked={chosenColorTheme === "orange"}
            />
            <p className="menu-content__p">Orange</p>
          </label>
        </div>
        <div className="options__themes-panel_buttons">
          <button className="custom-button custom-button--big">
            Decline Change
          </button>

          <button className="custom-button custom-button--big">
            Save Color Theme
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="options">
      <h1 className="section__header">Options</h1>

      <div className="options__wrapper">
        <Tabs
          header1="Theme Options"
          header2="Log Out"
          content1={<ThemeOptionsPanel />}
          content2={<LogOutPanel />}
        />
      </div>
    </main>
  );
}

export default OptionsPage;
