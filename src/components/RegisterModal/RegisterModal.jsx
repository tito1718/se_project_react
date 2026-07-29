import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  isOpen,
  onRegister,
  onCloseModal,
  onLoginClick,
  serverError,
  onClearError,
}) {
  const { values, errors, isValid, handleChange, resetForm } = useForm({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleInputChange = (evt) => {
    handleChange(evt);

    if (serverError) {
      onClearError();
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!isValid) {
      return;
    }

    onRegister(values, resetForm);
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      name="register"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      isValid={isValid}
      alternateButtonText="or Log in"
      onAlternateButtonClick={onLoginClick}
    >
      <label htmlFor="register-email" className="modal__label">
        Email
        <input
          type="email"
          className={`modal__input ${
            errors.email ? "modal__input_type_error" : ""
          }`}
          id="register-email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputChange}
          autoComplete="email"
          required
        />
        <span className="modal__error">{errors.email}</span>
      </label>

      <label htmlFor="register-password" className="modal__label">
        Password
        <input
          type="password"
          className={`modal__input ${
            errors.password ? "modal__input_type_error" : ""
          }`}
          id="register-password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleInputChange}
          autoComplete="new-password"
          minLength="8"
          required
        />
        <span className="modal__error">{errors.password}</span>
      </label>

      <label htmlFor="register-name" className="modal__label">
        Name
        <input
          type="text"
          className={`modal__input ${
            errors.name ? "modal__input_type_error" : ""
          }`}
          id="register-name"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleInputChange}
          autoComplete="name"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="modal__error">{errors.name}</span>
      </label>

      <label htmlFor="register-avatar" className="modal__label">
        Avatar URL
        <input
          type="url"
          className={`modal__input ${
            errors.avatar ? "modal__input_type_error" : ""
          }`}
          id="register-avatar"
          name="avatar"
          placeholder="Avatar URL"
          value={values.avatar}
          onChange={handleInputChange}
          autoComplete="url"
          required
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

export default RegisterModal;
