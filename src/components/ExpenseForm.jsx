import React from "react";
import { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  //states for each input field
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  //state for validation error message
  const [error, setError] = useState("");

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent page reload

    //validation logic
    if (!amount || amount <= 0 || !category || !date) {
      setError("Please Enter valid expense details");
      return;
    }

    //creating expense object
    const expenseData = {
      id: Date.now(),
      amount: Number(amount),
      category,
      date,
    };

    //send data to parent
    onAddExpense(expenseData);

    //reset form
    setAmount("");
    setCategory("");
    setDate("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>
      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* Input fields */}
      <div className="form-group">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category </option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Expenses</button>
    </form>
  );
};

export default ExpenseForm;
