import { useState } from "react";
import { Button } from "../UI/Button/Button";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import css from "./NewExpense.module.css";

const NewExpense = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  function showFormHandler() {
    setShowForm((prevState) => !prevState);
  }

  const form = showForm ? (
    <ExpenseForm onShowForm={showFormHandler} onAdd={onAdd} />
  ) : (
    <Button text="Добавить новый расход" onClick={showFormHandler} />
  );

  return <div className={css.newExpenseStyles}>{form}</div>;
};

export default NewExpense;
