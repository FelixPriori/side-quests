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
        { props.adventurer && 
          <div>
            <p>
              <strong>{props.adventurer.username}</strong><br/>
              {completed 
                ? "completed this quest." 
                : "is currently assisting."}<br/>
              {!completed 
                && 
                  <a 
                    href={`mailto: ${props.adventurer.email}?subject=${name}`}>
                      Email {props.adventurer.username}
                  </a>}
            </p>
          </div>
        }
        {completed
          ? <div className="check-container">
              <div className="checkmark-div"><Check className="checkmark"/></div>
            </div>
          : <div className="btn-group">
            <Button danger onClick={() => setConfirmation(true)}>Cancel</Button>
            { props.adventurer &&
              <div className="btn-group">
                <Button confirm><a className="inside-anchor" href="https://hangouts.google.com/call/4vTdHBEPZQ6TnGAwr570AEEE?no_rd" target="_blank">Hangout</a></Button>
                <Button confirm onClick={() => props.onComplete(props.villagerQuest.class_id, props.villagerQuest.id, props.villagerQuest.adventurer_id)}>Complete</Button>
              </div>}
          </div>
        }
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
    </div >
  )
}