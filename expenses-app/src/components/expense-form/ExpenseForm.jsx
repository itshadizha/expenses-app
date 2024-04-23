import Button from "../UI/Button/Button";
import { FormInput } from "../UI/FormInput/FormInput";
import css from "./ExpenseForm.module.css";

import PropTypes from "prop-types";

export const ExpenseForm = ({ onShowForm }) => {
  return (
    <form>
      <div className={css.formInputContainer}>
        <FormInput labelName="Заголовок" id="title" type="text" />
        <FormInput labelName="Количество" id="price" type="number" />
      </div>
      <FormInput labelName="Датировать" id="date" type="date" />
      <div className={css.formInputFooter}>
        <Button title="Отмена" styles={css.buttonSpace} onClick={onShowForm} />
        <Button title="Добавить расход" />
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {
  onShowForm: PropTypes.func.isRequired,
};
