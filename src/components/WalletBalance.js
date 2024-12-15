import React, { useState } from "react";
import Button from "./Button";
import Modal from 'react-modal';
import AddBalance from "./AddBalance";

const WalletBalance = ({ walletBalance, setWalletBalance }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddBalance = (amount) => {
    if (amount > 0) {
        const updatedBalance = walletBalance + parseFloat(amount);
        setWalletBalance(updatedBalance);
        localStorage.setItem("walletBalance", updatedBalance);
    }
  };

  const handleAddBalanceClick = () => {
    console.log("clicked")
    setIsAddModalOpen(true)
  }

  return (
    <div className="wallet-balance">
        <h2>Wallet Balance: ${walletBalance.toFixed(2)}</h2>
        <Button onClick={handleAddBalanceClick} label={"+ Add Income"} color={"#39FF14"}/>
        <Modal 
        isOpen={isAddModalOpen} 
        onRequestClose={()=>setIsAddModalOpen(false)} 
        contentLabel="Example Modal" 
        className="modal-content" 
        overlayClassName="modal-overlay"
        >
            <AddBalance onCancel={()=>setIsAddModalOpen(false)} onAddBanalnce={handleAddBalance}/>
        </Modal>       
    </div>
  );
}

export default WalletBalance;
