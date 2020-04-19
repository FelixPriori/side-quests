import React from 'react';
import './QuestListItem.scss';
import Button from '../Button/Button';
import CheckSeal from '../CheckSeal/CheckSeal';
import { Check } from 'react-bootstrap-icons';
// import ChatWindow from '../ChatWindow/ChatWindow';
// import { ChatDotsFill } from 'react-bootstrap-icons';

export default function QuestListItem(props) {
  // const [viewChat, setViewChat] = useState(false);
  const { name, description, adventurer_id, city } = props.userQuests;
  // const toggleChat = () => {
  //   if (viewChat) {
  //     setViewChat(false)
  //   } else {
  //     setViewChat(true)
  //   }
  // };

  // const { userData, newUserCheck, openNewSocket, addNewMessage, socket, chatMessages, knownUsers } = props;
  const { onAccept } = props;

  return (
    <div className="quest-item">
      <h3>{name}</h3>
      <p className="username">Villager: {props.villager.username}</p>
      <p>Location: {city}</p>
      <p>{description}</p>
      <footer className="quest-footer">
        {adventurer_id
          &&
          <div className="links">
            <a href="https://hangouts.google.com/call/4vTdHBEPZQ6TnGAwr570AEEE?no_rd" target="_blank"><Button confirm>Hangout</Button></a>
            <a
              href={`mailto: ${props.villager.email}?subject=${name}`}>
              Email {props.villager.username}
            </a>
          </div>
        }
        {adventurer_id
          ? <div className="check-container"><CheckSeal /></div>
          : <div className="btn-group">
            <Button confirm onClick={() => onAccept(props.userQuests.id)}>Accept Quest</Button>
            {/* <Button confirm onClick={() => toggleChat()}><ChatDotsFill /></Button> */}
          </div>
        }
      </footer>
      {/* {viewChat &&
        <ChatWindow
          onClose={() => toggleChat(false)}
          newUserCheck={newUserCheck}
          openNewSocket={openNewSocket}
          addNewMessage={addNewMessage}
          socket={socket}
          chatMessages={chatMessages}
          knownUsers={knownUsers}
          userData={userData}
        />} */}
    </div>
  )
}