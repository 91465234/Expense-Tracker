import React from "react";

const ExpenseSummary = ({ expenses }) => {
  //  Total expenses
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  // Category-wise totals
  const categoryTotals = expenses.reduce((acc, expense) => {
    if (acc[expense.category]) {
      acc[expense.category] += expense.amount;
    } else {
      acc[expense.category] = expense.amount;
    }
    return acc;
  }, {});

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Expenses: ₹{total}</p>

      <h4>Category-wise:</h4>
      {Object.keys(categoryTotals).length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul>
          {Object.entries(categoryTotals).map(([category, amount]) => (
            <li key={category}>
              {category}: ₹{amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseSummary;
