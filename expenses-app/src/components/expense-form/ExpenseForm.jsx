import { Button } from "../UI/Button/Button";
import { FormInput } from "../UI/Form-input/FormInput";
import PropTypes from "prop-types";
import css from "./ExpenseForm.module.css";
import { useState } from "react";

export const ExpenseForm = ({ onShowForm, onAdd }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(null);
  const [isTitleError, setTitleError] = useState(false);

  const titleChangeHandler = (event) => {
    if (event.target.value.includes("@")) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      title: title,
      price: +amount,
      date: new Date(date),
    };
    onAdd(newExpense);
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    onShowForm();
  };

  return (
    <form>
      <div className={css.formInputContainer}>
        <FormInput
          label="Заголовок"
          inputType="text"
          id="f1"
          onChang={titleChangeHandler}
          isError={isTitleError}
        />
        <FormInput
          label="Цена"
          inputType="number"
          id="f2"
          onChang={amountChangeHandler}
        />
      </div>
      <FormInput
        label="Дата"
        inputType="date"
        id="f3"
        onChang={dateChangeHandler}
      />
      <div className={css.formInputFooter}>
        <Button text="Добавить" onClick={submitHandler} />
        <Button text="Отмена" onClick={cancelHandler} />
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {
  onShowForm: PropTypes.func,
};
