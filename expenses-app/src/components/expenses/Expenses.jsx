import PropTypes from "prop-types";
import { ExpenseItem } from "../expense-item/ExpenseItem";
import { ExpenseFilter } from "../expense-filter/ExpenseFilter";
import { useState } from "react";

export const Expenses = ({ data, onDelete }) => {
  const [selectedYear, setSelectedYear] = useState("All");

  const yearChangeHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredExpenses = data.filter((item) => {
    if (selectedYear) {
      return item.date.getFullYear().toString() === selectedYear;
    }
    return false;
  });

  const renderedExpenses = selectedYear === "All" ? data : filteredExpenses;

  return (
    <ul>
      <ExpenseFilter value={selectedYear} onChange={yearChangeHandler} />
      {renderedExpenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            price={item.price}
            id={item.id}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

Expenses.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
};
