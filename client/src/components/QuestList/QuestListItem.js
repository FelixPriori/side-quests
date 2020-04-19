import React from 'react';
import './QuestListItem.scss';
import Button from '../Button/Button';
import { Check } from 'react-bootstrap-icons';
// import ChatWindow from '../ChatWindow/ChatWindow';
// import { ChatDotsFill } from 'react-bootstrap-icons';

export default function QuestListItem(props) {
  // const [viewChat, setViewChat] = useState(false);
  const { name, description, adventurer_id } = props.userQuests;
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
      <p>{description}</p>
      <footer className="quest-footer">
        {adventurer_id
            &&
            <a 
              href={`mailto: ${props.villager.email}?subject=${name}`}>
                Email {props.villager.username}
            </a>}
        {adventurer_id
          ? <div className="check-container"><div className="checkmark-div"><Check className="checkmark" /></div></div>
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