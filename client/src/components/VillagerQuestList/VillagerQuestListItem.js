import React, { useState } from "react";
import "./VillagerQuestListItem.scss";
import Button from "../Button/Button";
import { CheckSeal } from "../CheckSeal/CheckSeal";
import axios from "axios";

const classnames = require("classnames");

export default function QuestListItem(props) {
  const { name, description, completed } = props.villagerQuest;
  const questItemClass = classnames("quest-item", {
    completed: completed,
  });
  const [confirmation, setConfirmation] = useState(false);

  const completeQuest = function (classId, questId, adventurerId) {
    const data = { adventurerId };
    axios.post(`/quests/${questId}/completeQuest/${classId}`, data).then(() => {
      const quests = props.state.questsByVillager.map((quest) => {
        if (quest.id === questId) {
          quest.completed = true;
          return quest;
        } else {
          return quest;
        }
      });
      props.setState((prevState) => ({
        ...prevState,
        questsByVillager: quests,
      }));
    });
  };

  const cancelQuest = function (questId) {
    axios.delete(`/quests/${questId}/delete`).then(() => {
      //UPDATE THE STATE AFTER
      const quests = props.state.questsByVillager.filter(
        (quest) => quest.id !== questId
      );
      props.setState((prevState) => ({
        ...prevState,
        questsByVillager: quests,
      }));
      setConfirmation(false);
    });
  };

  return (
    <div className={questItemClass}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="footer">
        {props.adventurer && (
          <div className="assisting">
            <p>
              <strong>{props.adventurer.username}</strong>
              <br />
              {completed ? "completed this quest." : "is currently assisting."}
              <br />
            </p>
          </div>
        )}
        {completed ? (
          <div className="check-container">
            <CheckSeal />
          </div>
        ) : (
          <div className="all-btns">
            {props.adventurer ? (
              <div className="btn-group">
                <Button danger onClick={() => setConfirmation(true)}>
                  Cancel
                </Button>
                <Button confirm>
                  <a
                    className="inside-anchor"
                    href="https://hangouts.google.com/call/4vTdHBEPZQ6TnGAwr570AEEE?no_rd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hangout
                  </a>
                </Button>
                <Button confirm>
                  <a
                    className="email-link"
                    href={`mailto: ${props.adventurer.email}?subject=${name}`}
                  >
                    Email
                  </a>
                </Button>
                <Button
                  confirm
                  onClick={() =>
                    completeQuest(
                      props.villagerQuest.class_id,
                      props.villagerQuest.id,
                      props.villagerQuest.adventurer_id
                    )
                  }
                >
                  Complete
                </Button>
              </div>
            ) : (
              <Button
                className="one-btn"
                danger
                onClick={() => setConfirmation(true)}
              >
                Cancel
              </Button>
            )}
          </div>
        )}
      </div>
      {confirmation && (
        <div className="alert alert-danger confirmation">
          <p className="alert-msg">
            Are you sure you wish to delete this quest?
          </p>
          <div className="btn-group">
            <Button confirm onClick={() => setConfirmation(false)}>
              Cancel
            </Button>
            <Button danger onClick={() => cancelQuest(props.villagerQuest.id)}>
              {" "}
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
