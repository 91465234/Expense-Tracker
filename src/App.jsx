import { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpeneList from "./components/ExpeneList";
import ExpenseSummary from "./components/ExpenseSummary";
import Filter from "./components/Filter";

function App() {
  //state to store all expenses data
  const [expenses, setExpenses] = useState([]);
  //store selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState("All");
  //to add new expense
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  // load expenses on app start
  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);
  //save expenses whenever they changes
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // to delete expenses
  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((exp) => exp.id !== id));
  };

  //filtered expenses
  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  return (
    <div className="app-container">
      <h1 style={{ textAlign: "center" }}>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ExpeneList expenses={filteredExpenses} onDelete={deleteExpenseHandler} />
      <ExpenseSummary expenses={filteredExpenses} />
    </div>
  );
}

export default App;
