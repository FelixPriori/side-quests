import React, { useState, useEffect } from 'react';
import './ClassSelection.scss';
import ClassProgress from '../ClassProgress/ClassProgress';
import QuestList from '../QuestList/QuestList';
import Badge from '../Badge/Badge';

export default function ClassSelection(props) {
  const [ classItem, setClassItem ] = useState(null);
  const [ classProgress, setClassProgress ] = useState(null);
  // const { classesData, classesProgressData, villagers } = props.state;
  
  useEffect(() => {
    fetchQuests();
    fetchProgress();
    fetchBadges();
    fetchVillagers();
    fetchClasses();
  }, []);
  
  const { fetchQuests, fetchClasses, fetchProgress, fetchVillagers, fetchBadges } = props;
  
  const changeClass = name => {
    if (name === 'Choose a class') {
      return;
    }
    const selectedClass = props.state.classesData.find(classData => classData.name === name);
    const selectedClassProgress = props.state.classesProgressData.find(classProgress => selectedClass.id === classProgress.class_id)
    setClassItem(selectedClass);
    setClassProgress(selectedClassProgress);
  };

  // const classList = classesData.map((classData, index) => {
  //   const { name } = classData;
  //   return (
  //     <option 
  //       key={index}
  //       value={name}
  //     >
  //       {name}
  //     </option>
  //   );
  // })
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
            {props.state.classesData && props.state.classesData.map((classData, index) => {
              const { name } = classData;
              return (
                <option 
                  key={index}
                  value={name}
                >
                  {name}
                </option>
              );
            })}
          </select>
        </div>
          {classItem && 
            <div>
              <div className="content">
                <img src={classItem.avatar}/>
                <span>
                  <h3>{classItem.name}</h3>
                  <p>{classItem.description}</p>
                </span>
              </div>
              <div className="class-badges">
                <h3>Badges:</h3>
                <Badge classId={classItem.id}></Badge>
                <Badge classId={classItem.id}></Badge>
                <Badge classId={classItem.id}></Badge>
                <Badge classId={classItem.id}></Badge>
              </div>
              <h3>Class Progress:</h3>
              <ClassProgress data={classProgress}/>
            </div>
          }
      </section>
      { classItem && <QuestList classItem={classItem} userQuests={props.state.userQuests} villagers={props.state.villagers}/> }
    </section>
  );
}