import React, { useEffect } from 'react';
import './TakenQuests.scss';
import TakenQuestItem from './TakenQuestItem';

export default function TakenQuests(props) {

  const {fetchQuestsByAdventurer} = props;

  useEffect(() => {
    fetchQuestsByAdventurer();
  });  

  const currentQuests = props.state.questsByAdventurer && props.state.questsByAdventurer.map((quest, index) => {
    return (
      <TakenQuestItem
        key={index}
        quest={quest}
      />
    )
  })

  return (
    <section className="taken-quests">
      <h2>Your current quests</h2>
      <div className="current-quest-list">
        { currentQuests
          ? currentQuests
          : <div className="alert alert-danger">You currently do not have any created quests.</div>
        }
      </div>
    </section>
  );
}