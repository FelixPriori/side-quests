import React, { useState } from 'react';
import './ClassSelection.scss';
import ClassProgress from '../ClassProgress/ClassProgress';
import QuestList from '../QuestList/QuestList';
import BadgeBox from '../BadgeBox/BadgeBox';
import axios from "axios";
const { checkLocked, filterLocked } = require('../../helpers/badgeHelpers');

export default function ClassSelection(props) {
  const [classItem, setClassItem] = useState(null);
  const [classProgress, setClassProgress] = useState(null);
  const [classBadges, setClassBadges] = useState(null)

  const changeClass = name => {
    if (name === 'Choose a class') {
      return;
    }
    const selectedClass = props.state.classesData.find(classData => classData.name === name);
    const selectedClassProgress = props.state.classesProgressData.find(classProgress => selectedClass.id === classProgress.class_id)
    const selectedClassBadges = props.state.badges && props.state.badges.filter(badge => badge.class_id === selectedClass.id)
    setClassItem(selectedClass);
    setClassProgress(selectedClassProgress);
    setClassBadges(selectedClassBadges);
  };

  const lockedBadges = classBadges && checkLocked(classBadges, props.state.userBadges);
  const unlockedForClass = lockedBadges && filterLocked(lockedBadges, classBadges);



  const acceptQuest = function (questId) {
    axios.post(`/quests/${questId}/acceptQuest`).then(() => {
      const quests = props.state.userQuests.map(quest => {
        if (quest.id === questId) {
          quest.adventurer_id = props.state.userData.id;
        }
        return quest;
      })

      const newQuest = props.state.userQuests.find(quest => quest.id === questId);
      newQuest.adventurer_id = props.state.userData.id;
      const newAdventurerQuests = [...props.state.questsByAdventurer, newQuest];

      props.setState(prevState => ({
        ...prevState,
        userQuests: quests,
        questsByAdventurer: newAdventurerQuests
      }))
    });
  }


  const classList = props.state.classesData && props.state.classesData.map((classData, index) => {
    const { name } = classData;
    return (
      <option
        key={index}
        value={name}
      >
        {name}
      </option>
    );
  })
  return (
    <section className="quest-selection">
      <section className="select-class">
        <h2> Select a class </h2>
        <div className="menu">
          <select
            id="classes"
            className="browser-default custom-select"
            onChange={e => changeClass(e.currentTarget.value)}
          >
            <option defaultValue>Choose a class</option>
            {classList}
          </select>
        </div>
        {classItem &&
          <div>
            <div className="content">
              <img alt="avatar" src={`/images/Icons/${classItem.id}.png`} />
              <span>
                <h3>{classItem.name}</h3>
                <p>{classItem.description}</p>
              </span>
            </div>
            <div className="class-badges">
              <h3>Badges:</h3>
              <BadgeBox badges={unlockedForClass} lockedBadges={lockedBadges} />
            </div>
            <h3>Class Progress:</h3>
            {classProgress && <ClassProgress data={classProgress} />}
          </div>
        }
      </section>
      {classItem &&
        <QuestList
          classItem={classItem}
          userQuests={props.state.userQuests}
          villagers={props.state.villagers}
          userData={props.state.userData}
          onAccept={acceptQuest}
          setState={props.setState}
        />}
    </section>
  );
}