import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleRegisterClick,
  handleLoginClick,
}) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const currentUser = useContext(CurrentUserContext);

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
        className={`header__menu-overlay ${
          isMobileMenuOpened ? "header__menu-overlay_opened" : ""
        }`}
        onClick={() => setIsMobileMenuOpened(false)}
      >
        <div
          className="header__menu header__menu_opened"
          onClick={(evt) => evt.stopPropagation()}
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

          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="header__profile-link"
                onClick={() => setIsMobileMenuOpened(false)}
              >
                <div className="header__user-container">
                  <p className="header__username">{currentUser.name}</p>

                  {currentUser.avatar ? (
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      className="header__avatar"
                    />
                  ) : (
                    <div className="header__avatar-placeholder">
                      {currentUser.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
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
            </>
          ) : (
            <>
              <button
                type="button"
                className="header__auth-btn"
                onClick={() => {
                  handleRegisterClick();
                  setIsMobileMenuOpened(false);
                }}
              >
                Sign Up
              </button>

              <button
                type="button"
                className="header__auth-btn"
                onClick={() => {
                  handleLoginClick();
                  setIsMobileMenuOpened(false);
                }}
              >
                Log In
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
