import InputBox from "./InputBox";
import Button from "./Button";
import { useState } from "react";
const AddBalance = ({onAddBanalnce, onCancel}) => {
    const [balance, setBalance] = useState(0)

    const handleAddBalance = () => {
        onAddBanalnce(balance)
        setBalance(0)
    }

    return(
        <div>
            <h1>Add Balance</h1>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <InputBox type="number" placeholder={"Income Amount"} value={balance} onChange={(e)=>{setBalance(e.target.value)}}/>
                <Button label="Add Balance" onClick={handleAddBalance} color={"#FFDB58"}/>
                <Button label="Cancel" onClick={()=>onCancel()} color={"#D3D3D3"}/>
            </div>
        </div>
    )
}

export default AddBalance;