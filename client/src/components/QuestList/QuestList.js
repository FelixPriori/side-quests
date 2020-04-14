import React from 'react';
import './QuestList.scss';
import QuestListItem from './QuestListItem';

/* classItem
  {
    id: 1,
    name: 'Rogue',
    description: 'Rogues like to help people from the shadows by sneaking to the nearest store to deliver needed supplies',
    avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
  }
*/

/* questData
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

export default function QuestList(props) {
  const { questData, classItem } = props;
  
  const validQuests = questData.filter(quest => {
    return quest.class_id === classItem.id && quest.completed === false;
  })

  const quests = validQuests.map((quest, index) => <QuestListItem key={index} questData={quest} />)
  
  return(
    <section className="quest-list">
      <div class="quest-title">
        <h2>Quests for {classItem.name}</h2>
      </div>
      <div class="quest-list-items">
        {quests}
      </div>
    </section>
  )
}