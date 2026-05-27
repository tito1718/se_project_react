import { useEffect } from "react";

import "./ModalWithForm.css";
import closeBtn from "../../assets/close-btn.png";

function ModalWithForm({ children, buttonText, title, activeModal, onClose }) {
  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);

  return (
    <div
      className={`modal ${activeModal === "add-garment" ? "modal_opened" : ""}`}
      onClick={onClose}
    >
      <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
        <h2 className="modal__title">{title}</h2>

        <button onClick={onClose} type="button" className="modal__close">
          <img
            src={closeBtn}
            alt="Close button"
            className="modal__close-icon"
          />
        </button>

        <form className="modal__form">
          {children}

          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
