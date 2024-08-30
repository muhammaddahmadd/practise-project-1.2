
function Billing(){
    return <form className="form-split-bill">
        <h2>Split bill with Friend </h2>
        <p>Total bill:</p>
        <input type="number"/>
        <p>Your expense:</p>
        <input type="number" />
        <p>Your friend's expense</p>
        <input type="number" disabled />
       
       <p>Who's paying the bill:</p>
        <select>
            <option>You</option>
            <option>Friend</option>
        </select>
        <button type="submit" className="button">Split bill</button>
    </form>
}

export default Billing;