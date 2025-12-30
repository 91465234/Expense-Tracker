import React from "react";

const ExpeneList = ({ expenses, onDelete }) => {
  //empty State
  if (expenses.length === 0) {
    return <p>No expenses added yet.</p>;
  }
  return (
    <div>
      <ul className="expense-list">
        <strong>Expense Data:</strong>
        {expenses.map((item) => (
          <li key={item.id} className="expense-item">
            ₹{item.amount}/- for {item.category} on {item.date}{" "}
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpeneList;
