import React, { useEffect } from "react";
import './ChatWindow.scss';
import ChatInput from "../ChatInput/ChatInput";
import ChatMessage from "../ChatMessage/ChatMessage";


const userData = [
  {
    "id": 1,
    "username": "BobRobertson",
    "first_name": "Bob",
    "last_name": "Robertson",
    "email": "bob@example.com",
    "password": "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
    "avatar": "https://i.imgur.com/twYrpay.jpg",
    "adventurer": true
  }
]


export default function ChatWindow(props) {

  const { openNewSocket } = props;
  let { socket } = props;

  useEffect(() => {
    openNewSocket();
  }, [])


  const chatSubmit = (message) => {
    socket.emit('chat message', { msg: message, userId: props.userData.id });
  }

  //If message doesn't match userData.id get that users id and fetch picture from the database

  return (
    <div className="chatWindow">
      <div className="chatOutput">
        {props.chatMessages && props.chatMessages.map((message, index) => {
          if (props.userData && message.userData) {
            const currentUser = props.userData.id === message.userData.id;
            return <ChatMessage key={index} currentUser={currentUser} userData={[message.userData]} message={message.message} />
          }
        })}
      </div>
      <ChatInput onSubmit={chatSubmit} />
    </div>
  )
}