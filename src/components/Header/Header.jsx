import { useState } from "react";

import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ handleAddClick, weatherData }) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__top">
        <img className="header__logo" src={logo} alt="WTWR logo" />

        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>

        <button
          type="button"
          className="header__menu-btn"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>

      <div
        className={`header__menu ${
          isMobileMenuOpened ? "header__menu_opened" : ""
        }`}
      >
        <button
          type="button"
          className="header__close-btn"
          onClick={toggleMobileMenu}
        >
          ✕
        </button>

        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>

          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>

        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
      </div>
    </header>
  );
}

export default Header;
