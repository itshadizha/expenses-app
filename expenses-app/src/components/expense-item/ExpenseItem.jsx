import PropTypes from "prop-types";
import css from "./ExpenseItem.module.css";
import { ExpenseDate } from "../expense-date/ExpenseDate";
import { Button } from "../UI/Button/Button";

export const ExpenseItem = ({ title, date, price, id, onDelete }) => {
  return (
    <div className={css.expenseItemContainer}>
      <ExpenseDate date={date} />
      <div className={css.expenseItemTitle}>{title}</div>
      <div className={css.expenseItemPrice}>{price}$</div>
      <Button text="Удалить" onClick={() => onDelete(id)} />
    </div>
  );
};

ExpenseItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  price: PropTypes.number,
  onDelete: PropTypes.func,
  id: PropTypes.number,
};
