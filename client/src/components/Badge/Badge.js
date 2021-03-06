import React, { useState } from "react";
import "./Badge.scss";
import BadgeHover from "../BadgeHover/BadgeHover";

export default function Badge(props) {
  const [popUp, setPopUp] = useState(false);

  return (
    <div
      className="badge"
      onMouseEnter={() => setPopUp(true)}
      onMouseLeave={() => setPopUp(false)}
    >
      {props.locked ? (
        <img
          className="badgeImg locked"
          alt={props.badge.class_id}
          src={`/images/badges/${props.badge.class_id}.png`}
        />
      ) : (
        <img
          className="badgeImg"
          alt={props.badge.class_id}
          src={`/images/badges/${props.badge.class_id}.png`}
        />
      )}
      {popUp && (
        <BadgeHover
          name={props.badge.name}
          requirement={props.badge.requirement}
        />
      )}
    </div>
  );
}
