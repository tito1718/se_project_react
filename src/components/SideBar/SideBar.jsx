import { useContext } from "react";
import "./SideBar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ handleEditProfileClick, handleSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="sidebar">
      <img
        src={currentUser.avatar}
        alt={currentUser.name}
        className="sidebar__avatar"
      />
      <p className="sidebar__username">{currentUser.name}</p>
      <div className="sidebar__actions">
        <button
          type="button"
          className="sidebar__button"
          onClick={handleEditProfileClick}
        >
          Change profile data
        </button>

        <button
          type="button"
          className="sidebar__button"
          onClick={handleSignOut}
        >
          Log out
        </button>
      </div>
    </section>
  );
}

export default SideBar;
