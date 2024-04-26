import css from "./ExpenseFilter.module.css";
import PropTypes from "prop-types";

export const ExpenseFilter = ({ value, onChange }) => {
  return (
    <div className={css.expenseFilter}>
      <div className={css.expenseFilterControl}>
        <label>Filter by year</label>
        <select value={value ? value : "2024"} onChange={onChange}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};
ExpenseFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
