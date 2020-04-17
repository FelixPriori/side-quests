import React from 'react';
import './VillagerQuestListItem.scss';



export default function QuestListItem(props) {
  const { name, description } = props.villagerQuest;


  return (
    <div className="quest-item">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}