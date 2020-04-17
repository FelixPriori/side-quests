import React, { useState } from 'react';
import './VillagerQuestListItem.scss';
import Button from '../Button/Button';



export default function QuestListItem(props) {
  const { name, description, id } = props.villagerQuest;
  const [confirmation, setConfirmation ] = useState(false);

  return (
    <div className="quest-item-wrapper" styles={{display: 'flex', width: '100%'}}>
      <div className="quest-item">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="btn-group">
          <Button danger onClick={() => setConfirmation(true)}>Delete</Button>
          {/* <Button confirm onClick={props.onEdit}>Edit</Button> */}
          <Button confirm >Complete</Button>
        </div>
        { confirmation &&
          <div className="alert alert-danger">
            <p className="alert-msg">Are you sure you wish to delete this quest?</p>
            <div className='btn-group'>
              <Button confirm onClick={() => setConfirmation(false)}>Cancel</Button>
              <Button danger>Delete</Button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}