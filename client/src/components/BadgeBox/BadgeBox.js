import React from "react";
import Badge from "../Badge/Badge";
import './BadgeBox.scss';



export default function BadgeBox(props) {

  const classIds = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="badgeBox rounded">
      {classIds.map(classId => {
        return (
          <Badge key={classId} classId={classId} />
        )
      })}
    </div>
  )
}