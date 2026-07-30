import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemModal.css";
import closeBtn from "../../assets/close-btn.png";
import whiteCloseBtn from "../../assets/white-close-btn.png";

function ItemModal({ activeModal, onClose, card, onDeleteClick }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn =
    card.owner?._id === currentUser._id || card.owner === currentUser._id;

  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}
      onClick={onClose}
    >
      <div className="item-modal" onClick={(evt) => evt.stopPropagation()}>
        <button
          type="button"
          className="item-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img
            src={closeBtn}
            alt=""
            className="item-modal__close-icon item-modal__close-icon_type_desktop"
          />

          <img
            src={whiteCloseBtn}
            alt=""
            className="item-modal__close-icon item-modal__close-icon_type_mobile"
          />
        </button>

        <div className="item-modal__image-container">
          <img
            src={card.imageUrl}
            alt={card.name}
            className="item-modal__image"
          />

          <h2 className="item-modal__image-name">{card.name}</h2>
        </div>

        <div className="item-modal__information">
          <h2 className="item-modal__caption">{card.name}</h2>

          <p className="item-modal__weather">
            Weather:
            <span
              className={`item-modal__weather-value item-modal__weather_type_${card.weather}`}
            >
              {" "}
              {card.weather}
            </span>
          </p>

          {isOwn && (
            <button
              type="button"
              className="item-modal__delete-btn"
              onClick={() => onDeleteClick(card)}
            >
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
