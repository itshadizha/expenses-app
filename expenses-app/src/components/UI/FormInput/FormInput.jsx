import PropTypes from "prop-types";
import css from "./FormInput.module.css";

export const FormInput = ({ labelName, placeholder, inputType, id }) => {
  return (
    <div>
      <label className={css.formLabel} htmlFor={id}>
        {labelName}
      </label>
      <input
        className={css.formInput}
        type={inputType}
        placeholder={placeholder || "..."}
        id={id}
      />
    </div>
  );
};

FormInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
