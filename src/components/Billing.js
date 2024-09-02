import { useState } from "react";

function Billing({click}){
    const {name, id, balance} = click;
    const [bill, setBill] = useState("");
    const [myExpense, setMyExpense] = useState("");
    // const [friendExpense, setFriendExpense] = useState()
    const [sort, setSort] = useState("")

    function handleBillAmount(e){
        setBill(e.target.value)
    }
    function handleMyExpense(e) {
        setMyExpense(e.target.value)
    }

    function handleFormSplit(e){
        e.preventDefault();
       if(bill <=0) return
       setBill(bill);
       setMyExpense(myExpense);
    }

     const friendExpense = bill - myExpense; 

    return <form className="form-split-bill"  onSubmit={handleFormSplit}>
        <h2>Split bill with {!name? "(Click on any friend)" : name} </h2>
        <p>Total bill:</p>
        <input type="number" value={bill} onChange={handleBillAmount}/>
        <p>Your expense:</p>
        <input type="number" value={myExpense} onChange={handleMyExpense}/>
        <p>{name? name: "Friend"}'s expense</p>
        <input type="number" disabled  value={friendExpense}/>
       
       <p>Who's paying the bill:</p>
        <select>
            <option>You</option>
            <option>{name? name: "Friend"}</option>
        </select>
        <button type="submit" className="button">Split bill</button>
    </form>
}

export default Billing;