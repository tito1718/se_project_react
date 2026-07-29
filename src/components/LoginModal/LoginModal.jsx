import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  isOpen,
  onLogin,
  onCloseModal,
  onRegisterClick,
  serverError,
  onClearError,
  isLoading,
}) {
  const { values, errors, isValid, handleChange, resetForm } = useForm({
    email: "",
    password: "",
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

    onLogin(values, resetForm);
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText={isLoading ? "Logging in..." : "Log in"}
      name="login"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      isValid={isValid}
      isLoading={isLoading}
      alternateButtonText="or Sign up"
      onAlternateButtonClick={onRegisterClick}
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          type="email"
          className={`modal__input ${
            errors.email ? "modal__input_type_error" : ""
          }`}
          id="login-email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputChange}
          autoComplete="email"
          required
        />
        <span className="modal__error">{errors.email}</span>
      </label>

      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          type="password"
          className={`modal__input ${
            errors.password ? "modal__input_type_error" : ""
          }`}
          id="login-password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleInputChange}
          autoComplete="current-password"
          minLength="8"
          required
        />
        <span className="modal__error">{errors.password}</span>
      </label>

      {serverError && (
        <p className="modal__server-error" role="alert">
          {serverError}
        </p>
      )}
    </ModalWithForm>
  );
}

export default LoginModal;
