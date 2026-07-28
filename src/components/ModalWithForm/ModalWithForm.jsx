import "./ModalWithForm.css";
import closeBtn from "../../assets/close-btn.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  isOpen,
  onClose,
  onSubmit,
  isValid = true,
  alternateButtonText,
  onAlternateButtonClick,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onClick={onClose}
    >
      <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
        <h2 className="modal__title">{title}</h2>

        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src={closeBtn} alt="Close" className="modal__close-icon" />
        </button>

        <form
          className="modal__form"
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}

          <button
            type="submit"
            className={`modal__submit ${
              !isValid ? "modal__submit_disabled" : ""
            }`}
            disabled={!isValid}
          >
            {buttonText}
          </button>

          {alternateButtonText && (
            <button
              type="button"
              className="modal__alternate-button"
              onClick={onAlternateButtonClick}
            >
              {alternateButtonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
