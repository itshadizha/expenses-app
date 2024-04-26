import PropTypes from "prop-types";
import css from "./ExpenseDate.module.css";

export const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className={css.expenseDate}>
      <div className={css.expenseMonth}>{month}</div>
      <div className={css.expenseDay}>{year}</div>
      <div className={css.expenseYear}>{day}</div>
    </div>
  );
};

ExpenseDate.propTypes = {
  date: PropTypes.instanceOf(Date),
};
