import React, { useState, useEffect } from "react";
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
    socket.emit('chat message', { msg: message, userId: props.loggedInUser.id });
  }

  //If message doesn't match loggedInUser.id get that users id and fetch picture from the database

  return (
    <div className="chatWindow">
      <div className="chatOutput">
        <ChatMessage currentUser={true} userData={userData} message={"Howdy partner"} />
        <ChatMessage currentUser={false} userData={userData} message={"Oh hey!"} />
        {props.messages.map((message, index) => {
          console.log(props.loggedInUser);
          console.log(message.userData);
          if (props.loggedInUser && message.userData) {
            const currentUser = props.loggedInUser.id === message.userData.id;

            return <ChatMessage key={index} currentUser={currentUser} userData={[message.userData]} message={message.message} />

          }
        })}

      </div>
      <ChatInput onSubmit={chatSubmit} />
    </div>
  )
}