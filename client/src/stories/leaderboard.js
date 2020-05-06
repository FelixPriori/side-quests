import React from 'react';
import Leaderboard from '../components/Leaderboard/Leaderboard';


export default { title: 'Leaderboard' }

export const leaderboard = () => <Leaderboard users={leaderboardData} />



const leaderboardData = [
  {
    "id": 1,
    "username": "BobRobertson",
    "first_name": "Bob",
    "last_name": "Robertson",
    "email": "bob@example.com",
    "password": "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
    "avatar": "/images/defaultAvatar.png",
    "adventurer": true,
    "bio": ""
  },
  {
    "id": 2,
    "username": "AlAlbertson",
    "first_name": "Al",
    "last_name": "Albertson",
    "email": "al@example.com",
    "password": "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
    "avatar": "/images/defaultAvatar.png",
    "adventurer": false,
    "bio": ""
  },
  {
    "id": 3,
    "username": "SueSusanson",
    "first_name": "Sue",
    "last_name": "Susanson",
    "email": "sue@example.com",
    "password": "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
    "avatar": "/images/defaultAvatar.png",
    "adventurer": true,
    "bio": ""
  },
  {
    "id": 4,
    "username": "CingyMingus",
    "first_name": "Clinton",
    "last_name": "Andrews",
    "email": "drandrews@example.com",
    "password": "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
    "avatar": "/images/defaultAvatar.png",
    "adventurer": true,
    "bio": ""
  },
  {
    "id": 5,
    "username": "Putem",
    "first_name": "Leeroy",
    "last_name": "Darling",
    "email": "darlingwriter@example.com",
    "password": "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
    "avatar": "/images/defaultAvatar.png",
    "adventurer": true,
    "bio": ""
  },
  {
    "id": 6,
    "username": "MsSturgeon",
    "first_name": "Shae",
    "last_name": "Ramsay",
    "email": "sramsay@example.com",
    "password": "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
    "avatar": "/images/defaultAvatar.png",
    "adventurer": false,
    "bio": ""
  },
  {
    "id": 7,
    "username": "MalagdaMM",
    "first_name": "Robert",
    "last_name": "Rae",
    "email": "robertr@example.com",
    "password": "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
    "avatar": "/images/defaultAvatar.png",
    "adventurer": true,
    "bio": ""
  },
  {
    "id": 8,
    "username": "FrancisBob",
    "first_name": "Francis",
    "last_name": "Bob",
    "email": "fbob@example.com",
    "password": "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
    "avatar": "/images/defaultAvatar.png",
    "adventurer": false,
    "bio": ""
  },
  {
    "id": 9,
    "username": "PouletLover",
    "first_name": "Bob",
    "last_name": "Judger",
    "email": "thejudger@example.com",
    "password": "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
    "avatar": "/images/defaultAvatar.png",
    "adventurer": false,
    "bio": ""
  },
  {
    "id": 10,
    "username": "TP1990",
    "first_name": "Sarah",
    "last_name": "Palmer",
    "email": "sarah@example.com",
    "password": "$2b$10$xPttDUv.c13m9X1ni9CqEOFk1P5exXZeq.2LL.YrztVIWMxi4FTVm",
    "avatar": "/images/defaultAvatar.png",
    "adventurer": false,
    "bio": ""
  }
];