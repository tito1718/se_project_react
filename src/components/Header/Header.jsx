import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

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
        <Link to="/">
          <img className="header__logo" src={logo} alt="WTWR logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>

        <button
          type="button"
          className="header__menu-btn"
          onClick={() => setIsMobileMenuOpened(true)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
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
          onClick={() => setIsMobileMenuOpened(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <ToggleSwitch />

        <Link to="/profile" className="header__profile-link">
          <div className="header__user-container">
            <p className="header__username">Terrence Tegegne</p>
            <img
              src={avatar}
              alt="Terrence Tegegne"
              className="header__avatar"
            />
          </div>
        </Link>

        <button
          onClick={() => {
            handleAddClick();
            setIsMobileMenuOpened(false);
          }}
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
