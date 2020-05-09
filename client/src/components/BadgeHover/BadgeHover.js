import React from "react";
import "./BadgeHover.scss";

export default function BadgeHover(props) {
  return (
    <div className="badgeHover rounded">
      <h4>{props.name}</h4>
      <p>{props.requirement}</p>
    </div>
  );
}
