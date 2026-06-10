import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function AddItemModal({ isOpen, onAddItem, onCloseModal }) {
  const { values, errors, isValid, handleChange, resetForm } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!isValid) {
      return;
    }

    onAddItem(values, resetForm);
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      name="add-garment"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className={`modal__input ${errors.name ? "modal__input_type_error" : ""}`}
          id="name"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          autoComplete="off"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="modal__error">{errors.name}</span>
      </label>

      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="url"
          className={`modal__input ${errors.imageUrl ? "modal__input_type_error" : ""}`}
          id="imageUrl"
          name="imageUrl"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
          autoComplete="url"
          required
        />
        <span className="modal__error">{errors.imageUrl}</span>
      </label>

      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>

        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            name="weather"
            type="radio"
            value="hot"
            className="modal__radio-input"
            checked={values.weather === "hot"}
            onChange={handleChange}
            required
          />
          Hot
        </label>

        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            name="weather"
            type="radio"
            value="warm"
            className="modal__radio-input"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          Warm
        </label>

        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            name="weather"
            type="radio"
            value="cold"
            className="modal__radio-input"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          Cold
        </label>

        <label
          htmlFor="freezing"
          className="modal__label modal__label_type_radio"
        >
          <input
            id="freezing"
            name="weather"
            type="radio"
            value="freezing"
            className="modal__radio-input"
            checked={values.weather === "freezing"}
            onChange={handleChange}
          />
          Freezing
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
