import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfileModal({
  isOpen,
  onClose,
  onUpdateUser,
  isLoading,
  serverError,
  onClearError,
}) {
  const currentUser = useContext(CurrentUserContext);

  const { values, errors, isValid, handleChange, setValues, resetForm } =
    useForm({
      name: "",
      avatar: "",
    });

  useEffect(() => {
    if (isOpen) {
      setValues({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
    }
  }, [isOpen, currentUser, setValues]);

  function handleInputChange(evt) {
    handleChange(evt);

    if (serverError) {
      onClearError();
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(values, resetForm);
  }

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText={isLoading ? "Saving..." : "Save changes"}
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      isLoading={isLoading}
    >
      <label htmlFor="edit-profile-name" className="modal__label">
        Name
        <input
          type="text"
          className={`modal__input ${
            errors.name ? "modal__input_type_error" : ""
          }`}
          id="edit-profile-name"
          name="name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="30"
          value={values.name}
          onChange={handleInputChange}
        />
        <span className="modal__error">{errors.name}</span>
      </label>

      <label htmlFor="edit-profile-avatar" className="modal__label">
        Avatar
        <input
          type="url"
          className={`modal__input ${
            errors.avatar ? "modal__input_type_error" : ""
          }`}
          id="edit-profile-avatar"
          name="avatar"
          placeholder="Avatar URL"
          required
          value={values.avatar}
          onChange={handleInputChange}
        />
        <span className="modal__error">{errors.avatar}</span>
      </label>

      {serverError && (
        <p className="modal__server-error" role="alert">
          {serverError}
        </p>
      )}
    </ModalWithForm>
  );
}

export default EditProfileModal;
