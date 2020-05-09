import React from "react";
import "./BadgeHover.scss";
import PropTypes from "prop-types";

export default function BadgeHover(props) {
  return (
    <div className="badgeHover rounded">
      <h4>{props.name}</h4>
      <p>{props.requirement}</p>
    </div>
  );
}
