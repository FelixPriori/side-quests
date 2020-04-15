import React from 'react';
import './AllClasses.scss';
import ClassProgress from '../ClassProgress/ClassProgress';

export default function AllClasses(props) {
  const AllClassesProgressArray = props.classesProgressData.map(data => <ClassProgress data={data}/>);
  const AllClassesNames = props.classesData.map(data => <h3 key={data.id}> {data.name}</h3>)
  const toRender = [];
  for (let i = 0; i < AllClassesProgressArray.length; i++) {
    toRender.push(<div className="class-item">{AllClassesNames[i]}{AllClassesProgressArray[i]}</div>);
  }
  return (
    <div className="all-classses">
      <h2>All Class Progress</h2>
      <div className="class-items">
        {toRender}
      </div>
    </div>
  );
}