import React, { useState } from 'react';
import './QuestListItem.scss';
import Button from '../Button/Button';
import ChatWindow from '../ChatWindow/ChatWindow';
import { ChatDotsFill } from 'react-bootstrap-icons';
<<<<<<< HEAD

=======
/* 
  {
    id: 1,
    name: 'Hungry for some soup!',
    description: 'I am at home and feeling very sick. Can someone bring me some some soup please?',
    completed: false,
    latitude: 330,
    longitude: 123,
    class_id: 1,
    villager_id: 1
  }
*/
>>>>>>> 963c2327b7a1185f4bfd1b58b4d0f5899437a7a0

export default function QuestListItem(props) {
  const [ viewChat, setViewChat ] = useState(false);
  const { name, description } = props.userQuests;
  const toggleChat = () => {
    if (viewChat) {
      setViewChat(false)
    } else {
      setViewChat(true)
    }
  };

  const { newUserCheck, openNewSocket, addNewMessage, socket, chatMessages, knownUsers, userData } = props;

  return (
    <div className="quest-item">
      <h3>{name}</h3>
      <p className="username">Villager: {props.villager}</p>
      <p>{description}</p>
      <footer className="quest-footer">
        <Button confirm>Accept Quest</Button>
<<<<<<< HEAD
        <Button confirm><ChatDotsFill /></Button>
=======
        <Button confirm onClick={() => toggleChat()}><ChatDotsFill/></Button>
>>>>>>> 963c2327b7a1185f4bfd1b58b4d0f5899437a7a0
      </footer>
      { viewChat && 
        <ChatWindow 
          onClose={() => toggleChat(false)}
          newUserCheck={newUserCheck}
          openNewSocket={openNewSocket}
          addNewMessage={addNewMessage}
          socket={socket}
          chatMessages={chatMessages}
          knownUsers={knownUsers}
          userData={userData}
        /> }
    </div>
  )
}