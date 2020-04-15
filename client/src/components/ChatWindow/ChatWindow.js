import React, { useState } from "react";
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

  return (
    <div className="chatWindow">
      <div className="chatOutput">
        <ChatMessage currentUser={true} userData={userData} message={"Howdy partner"} />
        <ChatMessage currentUser={false} userData={userData} message={"Howdy partner"} />
      </div>
      <ChatInput />
    </div>
  )
}