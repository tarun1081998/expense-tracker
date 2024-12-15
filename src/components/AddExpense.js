import React, { useState } from "react";
import { useSnackbar } from "notistack";
import InputBox from "./InputBox";
import Button from "./Button";

const AddExpense = ({ expenses, setWalletBalance, addExpense, onCancel }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleAddExpense = () => {
    if (!title || !amount || !category || !date) {
      enqueueSnackbar("All fields are required!", { variant: "error" });
      return;
    }

    if (parseFloat(amount) > expenses) {
      enqueueSnackbar("Insufficient wallet balance!", { variant: "error" });
      return;
    }

    const expense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };
    addExpense(expense);
    setWalletBalance(expenses - parseFloat(amount));
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    onCancel()
  };

  return (
    <div>
      <h1>Add Expense</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <InputBox
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputBox
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <InputBox
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <InputBox
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button label="Add Expense" onClick={handleAddExpense} color="#FFDB58" />
          <Button label="Cancel" onClick={onCancel} color="#D3D3D3" />
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
