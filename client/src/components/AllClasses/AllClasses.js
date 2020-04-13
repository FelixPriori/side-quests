import React from 'react';
import './AllClasses.scss';
import ClassProgress from '../ClassProgress/ClassProgress';

export default function AllClasses(props) {
  const AllClassesProgressArray = props.classesProgessData.map(data => <ClassProgress data={data}/>);
  const AllClassesNames = props.classesData.map(data => <h3 key={data.id}> {data.name}</h3>)
  const toRender = [];
  for (let i = 0; i < AllClassesProgressArray.length; i++) {
    toRender.push(AllClassesNames[i], AllClassesProgressArray[i]);
  }
  return (
    <div className="all-classses">
      <h2>All Class Progress</h2>
      {toRender}
    </div>
  );
}