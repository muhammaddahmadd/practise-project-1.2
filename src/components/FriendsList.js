import Friends from "../components/Friends"




function FriendsList({ data, onClickFriend, click, opened }){
    // console.log(data)
    return <div className="sidebar">
        <ul className="friends-list">
            {data.map(friend => (
                <Friends name={friend.name} opened={opened} onClickFriend={onClickFriend} click={click}  key={friend.id} id={friend.id} img={friend.image} balance={friend.balance} />
            ))}
        </ul>
    </div>
}


export default FriendsList;