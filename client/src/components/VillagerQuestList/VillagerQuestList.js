import React from "react";
import './VillagerQuestList.scss';
import VillagerQuestListItem from './VillagerQuestListItem';

export default function VillagerQuestList(props) {

  const quests = props.state.questsByVillager && props.state.questsByVillager.map((quest, index) => {
    const questAdventurer = quest.adventurer_id && props.state.adventurers.find(adventurer => adventurer.id === quest.adventurer_id)
    return (
      <VillagerQuestListItem
        adventurer={questAdventurer}
        key={index}
        state={props.state}
        setState={props.setState}
        villagerQuest={quest}
        onEdit={props.onEdit}
      />
    );
  });

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
  );

}