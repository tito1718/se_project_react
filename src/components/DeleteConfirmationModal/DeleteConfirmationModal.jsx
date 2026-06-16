import "./DeleteConfirmationModal.css";
import closeBtn from "../../assets/close-btn.png";

function DeleteConfirmationModal({ isOpen, onClose, onConfirm }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`} onClick={onClose}>
      <div className="delete-modal" onClick={(evt) => evt.stopPropagation()}>
        <button
          type="button"
          className="delete-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img
            src={closeBtn}
            alt="Close"
            className="delete-modal__close-icon"
          />
        </button>

        <p className="delete-modal__text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>

        <button
          type="button"
          className="delete-modal__confirm-btn"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>

        <button
          type="button"
          className="delete-modal__cancel-btn"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
