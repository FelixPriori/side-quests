import React, { useState } from 'react';
import './VillagerQuestListItem.scss';
import Button from '../Button/Button';
import { Check } from 'react-bootstrap-icons';
const classnames = require('classnames');

export default function QuestListItem(props) {
  const { name, description, completed } = props.villagerQuest;
  const questItemClass = classnames("quest-item", {
    "completed": completed,
  });
  const [confirmation, setConfirmation] = useState(false);

  return (
    <div className={questItemClass}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="footer">
        {props.adventurer &&
          <div>
            <p>
              <strong>{props.adventurer.username}</strong><br />
              {completed ? "completed this quest." : "is currently assisting."}
            </p>
          </div>
        }
        {completed
          ? <div className="check-container">
            <div className="checkmark-div"><Check className="checkmark" /></div>
          </div>
          : <div className="btn-group">
            <Button danger onClick={() => setConfirmation(true)}>Cancel</Button>
            {props.adventurer &&
              <Button confirm onClick={() => props.onComplete(props.villagerQuest.class_id, props.villagerQuest.id, props.villagerQuest.adventurer_id)}>Complete</Button>}
          </div>
        }
      </div>
      {confirmation &&
        <div className="alert alert-danger confirmation">
          <p className="alert-msg">Are you sure you wish to delete this quest?</p>
          <div className='btn-group'>
            <Button confirm onClick={() => setConfirmation(false)}>Cancel</Button>
            <Button danger onClick={() => props.onDelete(props.villagerQuest.id)} > Delete</Button>
          </div>
        </div>
      }
    </div >
  )
}