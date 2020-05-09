import React from "react";
import "./Leaderboard.scss";


export default function Leaderboard(props) {

  //2 leaderboards
  //Quests completed leaderboard
  //and
  //Highest level class leaderboard


  //Filter all users to check which one has the highest level

  const compareByQuests = function (users) {


    return 0;
  }

  function compareByClass(a, b) {
    if (a.quest_count > b.quest_count) return 1;
    if (b.quest_count > a.quest_count) return -1;

    return 0;
  }

  const filterByClass = function (classProgress) {

    const sortedObjects = classProgress.sort(compareByClass);

    return sortedObjects;

  }

  //filterByClass(testClassData);


  return (
    <div className="leaderboard">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Username</th>
            <th scope="col">Amount of Quests</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ChickenMan</td>
            <td>50</td>
          </tr>
          <tr>
            <td>2</td>
            <td>MonkeyBoy</td>
            <td>23</td>
          </tr>
          <tr>
            <td>3</td>
            <td>MadamHaircut</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const testClassData = [
  {
    class_id: 1,
    adventurer_id: 1,
    level: 3,
    experience_points: 300,
    quest_count: 18
  },
  {
    class_id: 2,
    adventurer_id: 1,
    level: 3,
    experience_points: 200,
    quest_count: 5
  },
  {
    class_id: 3,
    adventurer_id: 1,
    level: 5,
    experience_points: 300,
    quest_count: 10
  },
  {
    class_id: 1,
    adventurer_id: 1,
    level: 3,
    experience_points: 300,
    quest_count: 23
  },

];