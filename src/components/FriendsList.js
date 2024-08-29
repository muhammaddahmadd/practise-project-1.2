import Friends from "../components/Friends"

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];
const data=initialFriends;

function FriendsList(){
    return <div className="sidebar">
        <ul className="friends-list">
            {data.map(friend => (
                <Friends name={friend.name} key={friend.id} id={friend.id} img={friend.image} balance={friend.balance} />
            ))}
        </ul>
    </div>
}


export default FriendsList;