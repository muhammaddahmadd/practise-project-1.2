import Friends from "../components/Friends"

const initialFriends = [
    {
        id: 118836,
        name: "Tahoor",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQGvlJmHd4Qgxw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1574856200229?e=1730332800&v=beta&t=EaEtt-a1qdi0DvXjHqLE6zWzhEUiGZ4-eYpPnvIB2pk",
        balance: -7,
    },
    {
        id: 933372,
        name: "Abdul Rehman",
        image: "https://ca.slack-edge.com/T09RX1EUE-U04H8QV60UC-2d836fbdb965-72",
        balance: 20,
    },
    {
        id: 499476,
        name: "Jawad",
        image: "https://ca.slack-edge.com/T09RX1EUE-U040N4KEECX-af78354b4aa0-72",
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