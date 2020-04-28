import React from "react";
import './GuestProfile.scss';
import BadgeBox from "../BadgeBox/BadgeBox";


export default function GuestProfile(props) {

  console.log(props.state.guestInfo);
  return (
    <section className="profile">
      <img src={props.state.guestInfo[0].avatar}></img>
      <h3>{props.state.guestInfo[0].username}</h3>
      <p>{props.state.guestInfo[0].bio}</p>
      <BadgeBox badges={props.state.guestBadges} />
    </section>
  );
}