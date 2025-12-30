import React from "react";

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div>
      {/* fiter category */}
      <div className="filter">
        <label>Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
