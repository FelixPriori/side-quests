import React from "react";
import './GuestProfile.scss';
import BadgeBox from "../BadgeBox/BadgeBox";


export default function GuestProfile(props) {

  console.log(props.state.guestInfo);
  return (
    <section className="profile">
      <img src={props.state.guestInfo.avatar}></img>
      <h3>{props.state.guestInfo.username}</h3>
      <p>{props.state.guestInfo.bio}</p>
      <BadgeBox />
    </section>
  );
}