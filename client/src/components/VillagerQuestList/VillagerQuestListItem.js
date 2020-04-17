import React, { useState, useEffect } from 'react';
import './VillagerQuestListItem.scss';
import Button from '../Button/Button';
import { Check } from 'react-bootstrap-icons';
const classnames = require('classnames');

export default function QuestListItem(props) {
  const { name, description, id, completed } = props.villagerQuest;
  const { fetchQuestsByVillager } = props;
  const questItemClass = classnames("quest-item", {
    "completed": completed,
  });
  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    fetchQuestsByVillager();
  }, [])

  return (
    <div className={questItemClass}>
      <h3>{name}</h3>
      <p>{description}</p>
      {completed
        ? <div className="checkmark"><Check /></div>
        : <div className="btn-group">
          <Button danger onClick={() => setConfirmation(true)}>Delete</Button>
          <Button confirm onClick={() => props.onComplete(props.villagerQuest.class_id, props.villagerQuest.id, props.villagerQuest.adventurer_id)}>Complete</Button>
        </div>
      }

      {confirmation &&
        <div className="alert alert-danger">
          <p className="alert-msg">Are you sure you wish to delete this quest?</p>
          <div className='btn-group'>
            <Button confirm onClick={() => setConfirmation(false)}>Cancel</Button>
            <Button danger>Delete</Button>
          </div>
        </div>
        {confirmation &&
        <div className="alert alert-danger">
          <p className="alert-msg">Are you sure you wish to delete this quest?</p>
          <div className='btn-group'>
            <Button confirm onClick={() => setConfirmation(false)}>Cancel</Button>
            <Button danger>Delete</Button>
          </div>
        </div>
      }
    </div>
    </div >
  )
}