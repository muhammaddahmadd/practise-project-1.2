import Friends from "../components/Friends"




function FriendsList({data}){
    return <div className="sidebar">
        <ul className="friends-list">
            {data.map(friend => (
                <Friends name={friend.name} key={friend.id} id={friend.id} img={friend.image} balance={friend.balance} />
            ))}
        </ul>
    </div>
}


export default FriendsList;