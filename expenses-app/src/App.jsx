import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";

const expenses = [
  {
    // Страхование автомобилей
    title: "Car Insurance",
    price: 300,
    date: new Date(2021, 2, 28),
    id: "f1",
  },
  {
    // Медицинское страхование
    title: "Health Insurance",
    price: 400,
    date: new Date(2021, 2, 29),
    id: "f2",
  },
];

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <NewExpense />
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
