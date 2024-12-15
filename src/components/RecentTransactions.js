import React from "react";

const RecentTransactions = ({expenses}) => {
  return (
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", color: "#333", height:'400px', overflowY:'scroll' }}>
      <h3 style={{ fontStyle: "italic", marginBottom: "10px" }}>Recent Transactions</h3>
      {expenses.map((tx) => (
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
          <span style={{ color: "#FFDB58", fontWeight: "bold" }}>₹{tx.amount}</span>
        </div>
      ))}
    </div>
  );
}

export default RecentTransactions;
