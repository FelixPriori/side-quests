import React from 'react';
import ChatWindow from '../components/ChatWindow/ChatWindow';


export default { title: 'ChatWindow' }

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


export const chatMessage = () => <ChatWindow userData={userData} message={"Howdy partner"} />