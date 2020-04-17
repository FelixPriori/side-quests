import React from 'react';
import './QuestList.scss';
import QuestListItem from './QuestListItem';




export default function QuestList(props) {

  const { userQuests, classItem, villagers } = props;

  const validQuests = userQuests && userQuests.filter(quest => {
    return quest.class_id === classItem.id && quest.completed === false;
  })

  const villagerForQuest = (villagers, validQuests) => {
    const output = [];
    for (const quest of validQuests) {
      const questObject = {}
      const villager = villagers && villagers.find(villager => villager.id === quest.villager_id);
      questObject[villager.username] = quest;
      output.push(questObject);
    }
    return output;
  };

  const villagerQuests = villagerForQuest(villagers, validQuests);
  const quests = villagerQuests && villagerQuests.map((quest, index) => {
    const villagerName = Object.keys(quest)[0];
    return (
      <QuestListItem
        newUserCheck={props.newUserCheck}
        openNewSocket={props.openNewSocket}
        addNewMessage={props.addNewMessage}
        chatMessages={props.chatMessages}
        socket={props.socket}
        knownUsers={props.knownUsers}
        key={index}
        userQuests={quest[villagerName]}
        villager={villagerName}
        onOpen={props.onOpen}
        userData={props.userData}
        onAccept={props.onAccept}
      />
    )
  })

  return (
    <section className="quest-list">
      <div className="quest-title">
        <h2>Quests for {classItem.name}</h2>
      </div>
      <div className="quest-list-items">
        {quests.length
          ? quests
          : <div className="alert alert-danger">There are currently no {classItem.name.toLowerCase()} quests available</div>
        }
      </div>
    </section>
  )
}