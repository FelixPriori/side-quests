import React, { useEffect } from 'react';
import './AllClasses.scss';
import ClassProgress from '../ClassProgress/ClassProgress';

export default function AllClasses(props) {
  const { fetchProgress, fetchClasses } = props;


  useEffect(() => {
    fetchProgress()
    fetchClasses()
  }, [])

  const AllClassesProgressArray = props.classesProgressData.map((data, index) => <ClassProgress key={index} data={data} />);
  const AllClassesNames = props.classesData.map((data, index) => <h3> {data.name}</h3>)
  const toRender = [];
  for (let i = 0; i < AllClassesProgressArray.length; i++) {
    toRender.push(<div key={i} className="class-item">{AllClassesNames[i]}{AllClassesProgressArray[i]}</div>);
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