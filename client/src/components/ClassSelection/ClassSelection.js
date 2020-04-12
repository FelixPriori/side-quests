import React, { useState } from 'react';
import './ClassSelection.scss';
import ClassProgress from '../ClassProgress/ClassProgress';


export default function ClassSelection(props) {
  const [ classItem, setClassItem ] = useState(null);
  const [ classProgress, setClassProgress ] = useState(null);
  const { classesData, classesProgessData } = props;

  const changeClass = name => {
    const selectedClass = classesData.find(classData => classData.name === name);
    const selectedClassProgress = classesProgessData.find(classProgress => selectedClass.id === classProgress.id)
    setClassItem(selectedClass);
    setClassProgress(selectedClassProgress);
  };

  const classList = classesData.map((classData, index) => {
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
    <main className="class__card">
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
              <img src={classItem.avatar}/>
              <span>
                <h3>{classItem.name}</h3>
                <p>{classItem.description}</p>
              </span>
            </div>
            <ClassProgress data={classProgress}/>
          </div>
        }
    </main>
  );
}