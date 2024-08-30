
function Billing({click}){
    const {name, id, balance} = click;
    return <form className="form-split-bill">
        <h2>Split bill with {!name? "(Click on any friend)" : name} </h2>
        <p>Total bill:</p>
        <input type="number"/>
        <p>Your expense:</p>
        <input type="number" />
        <p>{name}'s expense</p>
        <input type="number" disabled />
       
       <p>Who's paying the bill:</p>
        <select>
            <option>You</option>
            <option>{name}</option>
        </select>
        <button type="submit" className="button">Split bill</button>
    </form>
}

export default Billing;