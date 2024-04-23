import { useState } from "react";
import { Expenses } from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Шаурма",
      price: 94,
      date: new Date(),
    },
    {
      id: 2,
      title: "Ноутбук",
      price: 799,
      date: new Date(),
    },
    {
      id: 3,
      title: "Iphone 12 Pro Max",
      price: 294,
      date: new Date(),
    },
    {
      id: 4,
      title: "Ужин с женой",
      price: 450,
      date: new Date(),
    },
  ]);

  function addExpenseHandler(data) {
    data.id = Math.floor(Math.random() * 1000);

    setExpenses((prevState) => {
      return [...prevState, data];
    });
  }
  function deleteExpenseHandler(id) {
    const exchangeExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(exchangeExpenses);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <NewExpense onAdd={addExpenseHandler} />
        <Expenses data={expenses} onDelete={deleteExpenseHandler} />
          </div>
    </div>
  );
}

export default App;
