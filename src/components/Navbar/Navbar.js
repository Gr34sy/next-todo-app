import React from "react";
import { useEffect, useState } from "react";

import { Logo } from "../Logo/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

export function Navbar() {
  const [scroll, setScroll] = useState(0);
  const [showMobileList, setShowMobileList] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });

    return () => setScroll(0);
  }, []);

  return (
    <nav className="nav">
      <div
        className={
          scroll > 25
            ? "nav__container nav__container--sticky"
            : "nav__container "
        }
        onScroll={(e) => (e.currentTarget.class = "scroll")}
      >
        <div className="nav__content">
          <Logo />

          <ul className="nav__list">
            <li>
              <Link className="navbar__link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar__link" href="/list-creator">
                List Creator
              </Link>
            </li>
            <li>
              <Link className="navbar__link" href="/about-app">
                About
              </Link>
            </li>
            <li>
              <Link className="navbar__link" href="/options">
                Options
              </Link>
            </li>
          </ul>

          {!showMobileList && (
            <div
              className="hamburger-icon"
              onClick={() => setShowMobileList(true)}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
          )}

          {showMobileList && (
            <div className="x-icon" onClick={() => setShowMobileList(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          )}
        </div>
      </div>

      {showMobileList && (
        <ul className="nav__list--mobile">
          <li>
            <Link className="navbar__link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar__link" href="/list-creator">
              List Creator
            </Link>
          </li>
          <li>
            <Link className="navbar__link" href="/about-app">
              About the App
            </Link>
          </li>
          <li>
            <Link className="navbar__link" href="/options">
              Options
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
