import React, { useState } from 'react';
import './TakenQuestItem.scss';
import Button from '../Button/Button';

export default function TakenQuestItem(props) {
  const { name, description } = props.quest;
  const [confirmation, setConfirmation ] = useState(false);

  return (
    <div className="quest-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <Button danger onClick={() => setConfirmation(true)}>Drop Quest</Button>
      { confirmation &&
        <div className="alert alert-danger">
          <p className="alert-msg">Are you sure you wish to drop this quest?</p>
          <div className='btn-group'>
            <Button confirm onClick={() => setConfirmation(false)}>Cancel</Button>
            <Button danger>Delete</Button>
          </div>
        </div>
      }
    </div>
  )
}