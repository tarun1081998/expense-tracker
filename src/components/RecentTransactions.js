import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

const RecentTransactions = ({expenses, onDelete}) => {

  return (
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", color: "#333", height:'400px', overflowY:'scroll' }}>
      <h3 style={{ fontStyle: "italic", marginBottom: "10px" }}>Recent Transactions</h3>
      {expenses?.length > 0 ? expenses.map((tx) => (
        <div
          key={tx.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid #ddd",
            padding: "10px 0",
          }}
        >
          <div>
            <strong>{tx.title}</strong>
            <p style={{ fontSize: "12px", color: "#888" }}>{tx.date}</p>
          </div>
          <div>
            <span style={{ color: "#FFDB58", fontWeight: "bold" }}>₹{tx.amount}</span>
            <button
                onClick={() => onDelete(tx.id)}
                style={{
                  marginLeft: "10px",
                  border: "none",
                  backgroundColor: "red",
                  cursor: "pointer",
                  height:'30px',
                  borderRadius:'10px'
                }}
              >
                <FiTrash style={{stroke:'white'}}/>
              </button>
              <button
                // onClick={() => onEdit(tx.id)}
                style={{
                  marginLeft: "5px",
                  border: "none",
                  backgroundColor: "orange",
                  cursor: "pointer",
                  height:'30px',
                  borderRadius:'10px'
                }}
              >
                <FiEdit style={{stroke:'white'}}/>
              </button>
            </div>
        </div>
      ))
      :
      <span>No Expenses yet</span>
    }
    </div>
  );
}

export default RecentTransactions;
