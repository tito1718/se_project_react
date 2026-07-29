import { useState } from "react";

const URL_ERROR_MESSAGE =
  "Please enter a valid URL beginning with http:// or https://.";

export function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const { name, value, type, form } = input;

    input.setCustomValidity("");

    if (type === "url" && value.trim()) {
      try {
        const url = new URL(value.trim());
        const isWebUrl = url.protocol === "http:" || url.protocol === "https:";

        if (!isWebUrl) {
          input.setCustomValidity(URL_ERROR_MESSAGE);
        }
      } catch {
        input.setCustomValidity(URL_ERROR_MESSAGE);
      }
    }

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: input.validationMessage,
    }));

    setIsValid(form.checkValidity());
  };

  const resetForm = () => {
    setValues(inputValues);
    setErrors({});
    setIsValid(false);
  };

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    setValues,
  };
}
