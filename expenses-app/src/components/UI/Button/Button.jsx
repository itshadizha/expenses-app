import PropTypes from "prop-types";
import css from "./Button.module.css";

export const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={css.button}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
