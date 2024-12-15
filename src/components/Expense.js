import React, { useState } from "react";
import Button from "./Button";
import Modal from "react-modal";
import AddExpenseForm from "./AddExpense";

function Expense({ expenses, setWalletBalance, addExpense }) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddExpenseClick = () => {
    setIsAddModalOpen(true);
  };

  return (
    <div className="expense">
      <h2>Expenses: ${expenses.toFixed(2)}</h2>
      <Button onClick={handleAddExpenseClick} label="+ Add Expense" color="#FF073A" />
      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={() => setIsAddModalOpen(false)}
        contentLabel="Add Expense Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <AddExpenseForm
          setWalletBalance={setWalletBalance}
          addExpense={addExpense}
          onCancel={() => setIsAddModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default Expense;
