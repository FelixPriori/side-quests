import React from 'react';
import './QuestList.scss';
import QuestListItem from './QuestListItem';

export default function QuestList(props) {

  const { userQuests, classItem, villagers, userData } = props;

  const validQuests = userQuests && userQuests.filter(quest => {
    // to show a quest:
    // 1. its class must be selected
    // 2. the quest must not be completed
    // 3. the adventurer assigned must be yourself or 4. there are no adventurers assigned
    // 5. the villager who created the quest cannot be the current user (accout switch edge case)
    return (
      quest.class_id === classItem.id //1.
      && !quest.completed //2.
      && (quest.adventurer_id === userData.id //3.
      || !quest.adventurer_id) //4.
      && quest.villager_id !== userData.id //5.
    );
  })

  const questItems = validQuests && validQuests.map((quest, index) => {
    const villager = villagers && villagers.find(villager => villager.id === quest.villager_id);
    return (
      <QuestListItem
        // newUserCheck={props.newUserCheck}
        // openNewSocket={props.openNewSocket}
        // addNewMessage={props.addNewMessage}
        // chatMessages={props.chatMessages}
        // socket={props.socket}
        // knownUsers={props.knownUsers}
        key={index}
        userQuests={quest}
        villager={villager}
        onOpen={props.onOpen}
        userData={props.userData}
        onAccept={props.onAccept}
      />
    )
  });

  return (
    <section className="quest-list">
      <div className="quest-title">
        <h2>Quests for {classItem.name}</h2>
      </div>
      <div className="quest-list-items">
        {questItems.length
          ? questItems.reverse()
          : <div className="alert alert-danger">There are currently no {classItem.name.toLowerCase()} quests available</div>
        }
      </div>
    </section>
  )
}