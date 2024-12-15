import React from "react";

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <strong>{expense.title}</strong>: ${expense.amount.toFixed(2)} -{" "}
          {expense.category} - {expense.date}
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
