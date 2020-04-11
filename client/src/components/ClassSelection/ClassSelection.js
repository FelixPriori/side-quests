import React from 'react';
import '../ClassSelection/ClassSelection.scss';


export default function ClassSelection(props) {
  const { classesData } = props;
  const classList = classesData.map((classData, index) => {
    return (
      <option 
        key={index}
        value={classData.name}
      >
        {classData.name}
      </option>
    );
  })
  return (
    <main className="class__card">
      <select id="classes" className="browser-default custom-select">
        <option selected>Choose a class</option>
        {classList}
      </select>
    </main>
  );
}