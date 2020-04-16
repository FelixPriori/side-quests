import React from "react";
import Badge from "../Badge/Badge";
import './BadgeBox.scss';



export default function BadgeBox(props) {

  const { lockedBadges, badges } = props;

  const classIds = [1, 2, 3, 4, 5, 6, 7];
  // const badges = classIds.map(classId => <Badge key={classId} classId={classId} />)

  const unlocked = badges && badges.map(badge => <Badge key={badge.id} classId={badge.class_id} />)
  const locked = lockedBadges && lockedBadges.map(badge => <Badge key={badge.id} classId={badge.class_id} locked={true} />)

  return (
    <div className="badgeBox rounded">
      {unlocked}
      {locked}
    </div>
  )
}