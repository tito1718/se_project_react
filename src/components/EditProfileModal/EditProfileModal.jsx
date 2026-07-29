import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfileModal({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, setValues, resetForm } = useForm({
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

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser(values).then(() => {
      resetForm();
    });
  }

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText={isLoading ? "Saving..." : "Save changes"}
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          name="name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Avatar
        <input
          type="url"
          className="modal__input"
          name="avatar"
          placeholder="Avatar URL"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
