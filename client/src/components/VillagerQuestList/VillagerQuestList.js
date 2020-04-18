import React from "react";
import './VillagerQuestList.scss';
import VillagerQuestListItem from './VillagerQuestListItem';
import axios from "axios";

export default function VillagerQuestList(props) {

  const completeQuest = function (classId, questId, adventurerId) {
    const data = { adventurerId };
    axios.post(`/quests/${questId}/completeQuest/${classId}`, data).then(() => {
      const quests = props.state.questsByVillager.map(quest => {
        if (quest.id === questId) {
          quest.completed = true;
          return quest;
        } else {
          return quest;
        }
      })
      props.setState(prevState => ({
        ...prevState,
        questsByVillager: quests
      }))
    });
  }
  

  const quests = props.state.questsByVillager && props.state.questsByVillager.map((quest, index) => {
    const questAdventurer = quest.adventurer_id && props.state.adventurers.find(adventurer => adventurer.id === quest.adventurer_id)
    return (
      <VillagerQuestListItem
        adventurer={questAdventurer}
        key={index}
        villagerQuest={quest}
        onEdit={props.onEdit}
        onComplete={completeQuest}
      />
    );
  })

  return (
    <section className="quest-list">
      <div className="quest-title">
        <h2>Your Created Quests</h2>
      </div>
      <div className="quest-list-items">
        {quests.length
          ? quests.reverse()
          : <div className="alert alert-danger">You do not have any created quests.</div>
        }
      </div>
    </section>
  )

}