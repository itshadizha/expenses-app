import { Button } from "../UI/Button/Button";
import { FormInput } from "../UI/Form-input/FormInput";
import PropTypes from "prop-types";
import css from "./ExpenseForm.module.css";
import { useState } from "react";

export const ExpenseFormExample = ({ onShowForm }) => {
  const [title, setTitle] = useState("Please write some thing"); // '' - пустая строка

  const cancelHandler = (e) => {
    e.preventDefault();
    onShowForm();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <form>
      <div className={css.formInputContainer}>
        <FormInput
          label="Заголовок"
          inputType="text"
          id="f1"
          onChange={titleChangeHandler}
          value={title}
        />
        <FormInput label="Цена" inputType="number" id="f2" />
      </div>
      <FormInput label="Дата" inputType="date" id="f3" />
      <div className={css.formInputFooter}>
        <Button text="Добавить" onClick={onSubmitHandler} />
        <Button text="Отмена" onClick={cancelHandler} />
      </div>
    </form>
  );
};

ExpenseFormExample.propTypes = {
  onShowForm: PropTypes.func,
};
