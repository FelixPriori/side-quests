import React from "react";
import "./Leaderboard.scss";


export default function Leaderboard(props) {

  //2 leaderboards
  //Quests completed leaderboard
  //and
  //Highest level class leaderboard

  //Filter all users to check which one has the highest level
  const leaderboardUsers = [];


  return (
    <div className="leaderboard">
      <header></header>
      <div className="topUsers">
        {leaderboardUsers}
      </div>
    </div>
  );
}