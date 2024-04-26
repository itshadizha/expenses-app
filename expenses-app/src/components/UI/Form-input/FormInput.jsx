import PropTypes from "prop-types";
import css from "./FormInput.module.css";

export const FormInput = ({
  id,
  label,
  inputType,
  placeholder,
  onChang,
  value,
  isError,
}) => {
  return (
    <div>
      <label className={css.formLabel} htmlFor={id}>
        {label}
      </label>
      <input
        className={`${css.formInput} ${!isError && css.errorBorder}`}
        id={id}
        type={inputType}
        placeholder={placeholder || "..."}
        onChange={onChang}
        value={value}
      />
      {isError && <p className={css.error}>Некорректное значение</p>}
    </div>
  );
};

FormInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  onChang: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
