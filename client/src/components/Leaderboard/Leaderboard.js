import React from "react";
import "./Leaderboard.scss";


export default function Leaderboard(props) {

  //2 leaderboards
  //Quests completed leaderboard
  //and
  //Highest level class leaderboard

  //Filter all users to check which one has the highest level
  const leaderboardUsers = props.users.;

  const filterByQuests = function (users) {
    let currentUser = {};
    let currentMax = 0;


    return currentUser;
  }

  const filterByClass = function (users) {
    let currentUser = {};
    let currentMax = 0;


    return currentUser;

  }



  return (
    <div className="leaderboard">
      <table>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Amount of Quests</th>
        </tr>
        {leaderboardUsers}
      </table>
    </div>
  );
}