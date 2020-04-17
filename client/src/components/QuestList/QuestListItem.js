import React from 'react';
import './QuestListItem.scss';
import Button from '../Button/Button';
import { ChatDotsFill } from 'react-bootstrap-icons';


export default function QuestListItem(props) {
  const { name, description } = props.userQuests;

  return (
    <div className="quest-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <footer className="quest-footer">
        <p className="username">Villager: {props.villager}</p>
        <Button confirm>Accept Quest</Button>
        <Button confirm><ChatDotsFill /></Button>
      </footer>
    </div>
  )
}