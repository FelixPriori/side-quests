import React from "react";
import Badge from "../Badge/Badge";
import './BadgeBox.scss';



export default function BadgeBox() {

  const classIds = [1, 2, 3, 4, 5, 6, 7];
  const badges = classIds.map(classId => <Badge key={classId} classId={classId} />)
  return (
    <div className="badgeBox rounded">
      {badges}
    </div>
  )
}