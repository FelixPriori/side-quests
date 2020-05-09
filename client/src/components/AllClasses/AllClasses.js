import React from "react";
import "./AllClasses.scss";
import ClassProgress from "../ClassProgress/ClassProgress";

export default function AllClasses(props) {
  const classProgress = props.classesProgressData.map(
    (classProgress, index) => {
      const currentClass = props.classesData.find(
        (classData) => classData.id === classProgress.class_id
      );
      return (
        <div key={index} className="class-item">
          <h3>{currentClass.name}</h3>
          <ClassProgress data={classProgress} />
        </div>
      );
    }
  );

  return (
    <div className="all-classses">
      <h2>Class Progress</h2>
      <div className="class-items">{classProgress}</div>
    </div>
  );
}
