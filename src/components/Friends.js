

function Friends({ name, id, img, balance }){
    return <li className="friends">
        <img src={img} alt="images" className="avatar"/>
        <span className="name">{name}</span>
        {/* {balance>0? ``} */}
    </li>
}

export default Friends;