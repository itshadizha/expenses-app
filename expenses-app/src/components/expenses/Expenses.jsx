// more expenses components will be added here
import { ExpenseItem } from "../expense-item/ExpenseItem";
import PropTypes from "prop-types";
import css from "./Expenses.module.css";

export const Expenses = ({ expenses }) => {
  return (
    <ul className={css.expenseWrapper}>
      {expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            price={item.price}
          />
        );
      })}
    </ul>
  );
};

Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
};
