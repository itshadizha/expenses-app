import { useState } from "react";
import Button from "../UI/Button/Button";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import css from "./NewExpense.module.css";
export const NewExpense = () => {
  const [showForm, setShowForm] = useState(false);
  const newExpenseHandler = () => {
    setShowForm((prevState) => !prevState);
  };
  return (
    <div className={css.newExpenseStyles}>
      {showForm ? (
        <ExpenseForm onShowForm={newExpenseHandler} />
      ) : (
        <Button title="Добавить новый расход" onClick={newExpenseHandler} />
      )}
    </div>
  );
};
