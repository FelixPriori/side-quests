import React from "react";
import './Badge.scss';


export default function Badge(props) {
  return (
    <div className="badge">
      <img className="badgeImg" src={`/images/badges/${props.classId}.png`} />
    </div>
  )
}