import React, { useState, useEffect } from "react";
import WalletBalance from "./components/WalletBalance";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import { saveToLocalStorage, getFromLocalStorage } from "./utils/localStorageUtils";
import Expense from "./components/Expense";
import './App.css'
import RecentTransactions from "./components/RecentTransactions";
import TopExpenses from "./components/TopExpenses";

function App() {
  const [walletBalance, setWalletBalance] = useState(
    getFromLocalStorage("walletBalance") || 5000
  );
  const [expenses, setExpenses] = useState(getFromLocalStorage("expenses") || []);

  useEffect(() => {
    saveToLocalStorage("walletBalance", walletBalance);
  }, [walletBalance]);

  useEffect(() => {
    saveToLocalStorage("expenses", expenses);
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div className="balance-summary">
        <WalletBalance walletBalance={walletBalance} setWalletBalance={setWalletBalance} />
        <Expense expenses={expenses.reduce((acc,x)=>acc+x.amount,0)} setWalletBalance={setWalletBalance} addExpense={addExpense}/>
        <ExpenseSummary expenses={expenses} />
      </div>
      <div style={{display: 'flex', justifyContent:"space-between"}}>
        <div style={{width:'50%', margin:'2%'}}>
          <RecentTransactions expenses={expenses}/>
        </div>
        <div style={{width:'50%', margin:'2%'}}>
          <TopExpenses expenses={expenses}/>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
