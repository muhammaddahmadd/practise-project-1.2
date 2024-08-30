import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList';
import AddForm from './components/AddFrom';
import Billing from './components/Billing';
import Button from './components/Button';
import { useState } from 'react';


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
function App() {
  const [friend, setFriend] = useState(initialFriends);
  const [open, isOpen] = useState(false)
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [click, setClicked] = useState("")
console.log(initialFriends,"initial Friends")
  console.log(friend, "friend")


  function handleClickedFriend(id) {
    const clickedFriend = friend.find(fren => fren.id === id);
    if (clickedFriend) {
      setClicked(clickedFriend);
    }
    console.log(clickedFriend);
  }



 function handleOpen(){
    isOpen(open => !open)
  }
 
  function handleName(e){
    setName(e.target.value)
  }

  function handleImage(e) {
    setImageUrl(e.target.value)
  }

  function handleClose() {
    isOpen(open => !open)
  }

  function handleAddSubmission(e){
    e.preventDefault();
    if (!name.length) return alert("Please enter name")
    const newfren= {
      id: Math.floor(Math.random() * 1000000),
      name: name,
      imageUrl: imageUrl
    }
    console.log(newfren)
    setFriend(friend=>[...friend, newfren])
  }
  // const data = initialFriends;
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList click={click} onClickFriend={handleClickedFriend} data={friend} />
       {!open && <Button onClick={handleOpen} >Add friend</Button>}
        {open &&    
          <AddForm name={name} imageUrl={imageUrl} onAddName={handleName} onAddUrl={handleImage} onAdd={handleAddSubmission}/>}
        {open && <Button onClick={handleClose}>Close</Button>}
  </div>
   <Billing click={click}/>
    </div>
  );
}

export default App;
