import React from "react";
import QuestList from "../QuestList/QuestList";

import "./TeaserPage.scss";


const classData = {
  "id": 3,
  "name": "Druid",
  "description": "Druids love a companion and are happy to help your furry friends stay in tip top shape. Whether it's babysitting, or simply giving the dog a walk, Druids are happy to help!"
}


export default function TeaserPage(props) {

  return (
    <section className="select-class">
      {/* Title art img */}
      <QuestList
        classItem={classData}
        userQuests={props.state.userQuests}
        villagers={props.state.villagers}
        userData={props.state.userData}
        setState={props.setState}
        onAccept={null} />
      <div className="content">
        <img className="teaserImg" alt="avatar" src={`/images/Icons/3.png`} />
        <span>
          <h3>{classData.name}</h3>
          <p>{classData.description}</p>
        </span>
        <br></br>
        <h4>Sign in or Register to help people in need!</h4>
      </div>

    </section>

  );
}