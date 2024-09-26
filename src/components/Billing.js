import { useState } from "react";

function Billing({ click, bill, myExpense, handleSelection, handleSplition, handleFormSplit, handleMyExpense, handleBillAmount, friendExpense }){
    const {name, id, balance} = click;

    // const [friendExpense, setFriendExpense] = useState()
    const [sort, setSort] = useState("")

   


     

    return <form className="form-split-bill"  onSubmit={()=>handleFormSplit(id)}>
        <h2>Split bill with {!name? "(Click on any friend)" : name} </h2>
        <p>Total bill:</p>
        <input type="number" value={bill} onChange={handleBillAmount}/>
        <p>Your expense:</p>
        <input type="number" value={myExpense} onChange={handleMyExpense}/>
        <p>{name? name: "Friend"}'s expense</p>
        <input type="number" disabled  value={bill? friendExpense: ""}/>
       
       <p>Who's paying the bill:</p>
        <select onChange={handleSelection}>
            <option>You</option>
            <option>{name? name: "Friend"}</option>
        </select>
        <button type="submit" className="button" >Split bill</button>
    </form>
}

export default Billing;