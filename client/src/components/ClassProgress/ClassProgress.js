import React from 'react';
import './ClassProgress.scss';

export default function ClassProgress(props) {

  const { level, experience, quest_count } = props.data;

  const toNextLevel = (level, experience) => {
    const totalRequired = (level + 1) * 100;
    const expDifference = totalRequired - experience;
    const percentage = Math.round(experience / totalRequired * 100);
    const questsNeeded = expDifference / 100;
    return {questsNeeded, expDifference, percentage};
  }

  const { questsNeeded, expDifference, percentage } = toNextLevel(level, experience);

  return (
    <section>
      <h3>Class Progress:</h3>
      <div>
        <div className="progress-bar">
          <div 
            className="progress-inside"
            style={{width: percentage + "%", height: 1.5 + "em"}}
            >
              {percentage}%
          </div>
        </div>
          <span>
            <div className="left">
              <p>Current Level: {level}</p>
              <p>Current exp: {experience}</p>
              <p>Quest count: {quest_count}</p>
            </div>
            <div className="right">
              <p>Next Level: {level + 1}</p>
              <p>Exp for next Level {expDifference}</p>
              <p>Quests needed: {questsNeeded}</p>
            </div>
          </span>
      </div>
    </section>
  )
}