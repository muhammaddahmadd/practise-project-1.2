

function Friends({ name, id, img, balance }){
    return <li className="friends">
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
    </li>
}

export default Friends;