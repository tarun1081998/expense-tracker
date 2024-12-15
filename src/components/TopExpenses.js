import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function TopExpenses({expenses}) {

    const [data, setData] = useState([])

    useEffect(()=>{
        let expenseData = []
        expenses.map((x)=>{
            let category = expenseData.find(c=>c.category===x.category)
            if(category){
                category.amount+=x.amount
            }else{
                expenseData.push({category:x.category, amount:x.amount})
            }
        })
        setData(expenseData)
    },[expenses])

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        color: "#333",
        height: "400px",
        overflow: 'scroll'
      }}
    >
      <h3 style={{ fontStyle: "italic", marginBottom: "10px" }}>Top Expenses</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <XAxis type="number" hide axisLine={false} tickLine={false} />
          <YAxis
            dataKey="category"
            type="category"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#555", fontSize: 14 }}
            width={100}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="amount" fill="#8A73FF" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopExpenses;
