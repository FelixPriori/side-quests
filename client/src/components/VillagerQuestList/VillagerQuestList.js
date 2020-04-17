import React, { useEffect } from "react";
import './VillagerQuestList.scss';
import VillagerQuestListItem from './VillagerQuestListItem';

export default function VillagerQuestList(props) {

  //quests should be all the quests that the villager has made
  //Which is served at the /users/:villagerId/quests route


  useEffect(() => {
    fetchUserData();
    fetchQuestsByVillager();
  }, [])

  const { fetchUserData, fetchQuestsByVillager } = props;

  //All i need to do is map all the quests by a specific villager
  const quests = props.state.questsByVillager && props.state.questsByVillager.map((quest, index) => {
    console.log(quest);
    return (
      <VillagerQuestListItem
        key={index}
        villagerQuest={quest}
        onEdit={props.onEdit}
      />
    )
  })

  return (
    <section className="quest-list">
      <div className="quest-title">
        <h2>Your Created Quests</h2>
      </div>
      <div className="quest-list-items">
        {quests
          ? quests
          : <div className="alert alert-danger">You currently do not have any created quests.</div>
        }
      </div>
    </section>
  )

}