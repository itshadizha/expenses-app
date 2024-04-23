import PropTypes from "prop-types";
import css from "./ExpenseItem.module.css";

export const ExpenseItem = ({ title, date, price }) => {
  return (
    <div className={css.expenseItemContainer}>
      <div className={css.expenseItemDate}>{date.toISOString()}</div>
      <div className={css.expenseItemTitle}>{title}</div>
      <div className={css.expenseItemPrice}>{price}</div>
    </div>
  );
};

ExpenseItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  price: PropTypes.number,
};
