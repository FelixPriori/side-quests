import React from "react";
import './Badge.scss';


export default function Badge(props) {
  return (
    <div className="badge">
      {props.locked 
      ? <img className="badgeImg locked" alt={props.classId} src={`/images/badges/${props.classId}.png`} />
      : <img className="badgeImg" alt={props.classId} src={`/images/badges/${props.classId}.png`} />
    }
    </div>
  )
}