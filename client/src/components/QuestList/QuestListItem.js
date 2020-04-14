import React from 'react';
import './QuestListItem.scss';
import Button from '../Button/Button';

/* 
  {
    id: 1,
    name: 'Hungry for some soup!',
    description: 'I am at home and feeling very sick. Can someone bring me some some soup please?',
    completed: false,
    latitude: 330,
    longitude: 123,
    class_id: 1,
    villager_id: 1
  }
*/

export default function QuestListItem(props) {
  const { name, description, class_id, villager_id } = props.questData;

  return (
    <div className="quest-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <Button confirm>Accept Quest</Button>
    </div>
  )
}