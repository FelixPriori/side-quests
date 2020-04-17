import React, { useState } from 'react';
import './QuestListItem.scss';
import Button from '../Button/Button';
import ChatWindow from '../ChatWindow/ChatWindow';
import { ChatDotsFill } from 'react-bootstrap-icons';
import { Check } from 'react-bootstrap-icons';

export default function QuestListItem(props) {
  const [viewChat, setViewChat] = useState(false);
  const { name, description, adventurer_id } = props.userQuests;
  const toggleChat = () => {
    if (viewChat) {
      setViewChat(false)
    } else {
      setViewChat(true)
    }
  };


  const { newUserCheck, openNewSocket, addNewMessage, socket, chatMessages, knownUsers, userData, onAccept } = props;


  return (
    <div className="quest-item">
      <h3>{name}</h3>
      <p className="username">Villager: {props.villager}</p>
      <p>{description}</p>
      <footer className="quest-footer">
        {adventurer_id
          ? <div className="checkmark"><Check /></div>
          : <div className="btn-group"><Button confirm onClick={() => onAccept(props.userQuests.id)}>Accept Quest</Button>
            <Button confirm onClick={() => toggleChat()}><ChatDotsFill /></Button></div>
        }
      </footer>
      {viewChat &&
        <ChatWindow
          onClose={() => toggleChat(false)}
          newUserCheck={newUserCheck}
          openNewSocket={openNewSocket}
          addNewMessage={addNewMessage}
          socket={socket}
          chatMessages={chatMessages}
          knownUsers={knownUsers}
          userData={userData}
        />}
    </div>
  )
}