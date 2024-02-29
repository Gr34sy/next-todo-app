//components
import { signOut } from "next-auth/react";
import { Tabs } from "@/components/Tabs/Tabs";

//hooks
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

function OptionsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status == 'unauthenticated') {
      router.replace("/sign-in");
      return () => {};
    }

    return () => {};
  }, [status]);

  function LogOutPanel() {
    return (
      <div className="options__logout-panel">
        <p className="menu-content__h2">Are you sure to log out?</p>
        <button
          className="custom-button custom-button--big"
          onClick={() => signOut()}
        >
          Yes, I&apos;m sure
        </button>
      </div>
    );
  }

  function ThemeOptionsPanel() {
    const [chosenColorTheme, setChosenColorTheme] = useState();

    useEffect(() => {
      async function getUserTheme() {
        try {
          const response = await fetch("/api/theme");
          const data = await response.json();
          setChosenColorTheme(data.theme);
        } catch (err) {
          console.error(err);
        }
      }
      getUserTheme();

      return () => {};
    }, []);

    function themeChange(e) {
      setChosenColorTheme(e.target.value);

      document.body.className = `${e.target.value}`;
    }

    async function saveTheme() {
      const response = fetch("/api/theme", {
        method: "PUT",
        body: JSON.stringify({ theme: chosenColorTheme }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // const data = await response.json();
      // console.log(data);
    }
    function discard() {
      router.reload();
    }

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
              onChange={themeChange}
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
              onChange={themeChange}
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
              onChange={themeChange}
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
              onChange={themeChange}
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
              onChange={themeChange}
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
              onChange={themeChange}
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
              onChange={themeChange}
              checked={chosenColorTheme === "orange"}
            />
            <p className="menu-content__p">Orange</p>
          </label>
        </div>
        <div className="options__themes-panel_buttons">
          <button
            className="custom-button custom-button--big"
            onClick={discard}
          >
            Decline Change
          </button>

          <button
            className="custom-button custom-button--big"
            onClick={saveTheme}
          >
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
