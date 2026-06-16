import "./ItemModal.css";
import closeBtn from "../../assets/white-close-btn.png";

function ItemModal({ activeModal, onClose, card, onDeleteClick }) {
  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}
      onClick={onClose}
    >
      <div
        className="modal__content modal__content_type_image"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src={closeBtn} alt="Close icon" className="modal__close-icon" />
        </button>

        <img src={card.imageUrl} alt={card.name} className="modal__image" />

        <div className="modal__footer">
          <div className="modal__caption-container">
            <h2 className="modal__caption">{card.name}</h2>

            <button
              type="button"
              className="modal__delete-btn"
              onClick={() => onDeleteClick(card)}
            >
              Delete item
            </button>
          </div>

          <p className="modal__weather">
            Weather:
            <span
              className={`modal__weather-value modal__weather_type_${card.weather}`}
            >
              {" "}
              {card.weather}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
