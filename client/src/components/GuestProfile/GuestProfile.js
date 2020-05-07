import React from "react";
import "./GuestProfile.scss";
import { BadgeBox } from "../BadgeBox/BadgeBox";
import QuestListItem from "../QuestList/QuestListItem";

function VillagerQuests(props) {
  const villager = props.state.villagers.find(
    (villager) => villager.id === props.villagerId
  );
  const quests = props.state.userQuests
    .filter(
      (quest) => quest.villager_id === props.villagerId && !quest.completed
    )
    .map((quest, index) => {
      return (
        <QuestListItem
          key={index}
          userQuests={quest}
          villager={villager}
          onOpen={props.onOpen}
          userData={props.userData}
          onAccept={props.onAccept}
          onGuestProfile={props.onGuestProfile}
        />
      );
    });
  return (
    <div className="quest-list">
      <div className="quest-title">
        <h3>{villager.username}'s Quests</h3>
      </div>
      <div className="quest-list-items">
        {quests.length ? (
          quests.reverse()
        ) : (
          <div className="alert alert-danger">
            {villager.username} currently has no quests available.
          </div>
        )}
      </div>
    </div>
  );
}

export default function GuestProfile(props) {
  return (
    <section className="guest-profile">
      <div className="user-details">
        <img src={props.state.guestInfo[0].avatar}></img>
        <h3>{props.state.guestInfo[0].username}'s Profile</h3>
        {props.state.guestInfo[0].bio ? (
          <p>{props.state.guestInfo[0].bio}</p>
        ) : (
          <p>This user does not have a bio yet.</p>
        )}
      </div>
      <div className="user-progress">
        <BadgeBox badges={props.state.guestBadges} />
        <VillagerQuests
          villagerId={props.state.guestInfo[0].id}
          state={props.state}
        />
      </div>
    </section>
  );
}
