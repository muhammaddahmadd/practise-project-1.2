

function Friends({ name, id, img, balance, onClickFriend }){
    return <li className="friends" onClick={()=>onClickFriend(id)}>
        <img src={img} alt="images" className="avatar"/>
        <h3 className="name">{name}</h3>
       {balance < 0 &&
            <p className="red">You owe {name} {Math.abs(balance)}$ </p>   
    }
        {balance === 0 &&
            <p className="">You and {name} are even </p>
        }
        {balance > 0 &&
            <p className="green"> {name} owe you {balance}$ </p>
        }
        <button onClick={() => onClickFriend(id)} className="button" >Select</button>
    </li>
}

export default Friends;