import React from "react";
import "./TakenQuests.scss";
import TakenQuestItem from "./TakenQuestItem";

export default function TakenQuests(props) {
  const currentQuests =
    props.state.questsByAdventurer &&
    props.state.questsByAdventurer
      .sort((a, b) => b.completed - a.completed)
      .map((quest, index) => {
        const villager = props.state.villagers.filter(
          (villager) => quest.villager_id === villager.id
        );
        return (
          <TakenQuestItem
            key={index}
            quest={quest}
            villager={villager}
            state={props.state}
            setState={props.setState}
          />
        );
      });

  return (
    <section className="taken-quests">
      <h2>Your current quests</h2>
      <div className="current-quest-list">
        {currentQuests ? (
          currentQuests.reverse()
        ) : (
          <div className="alert alert-danger">
            You currently do not have any accepted quests.
          </div>
        )}
      </div>
    </section>
  );
}
