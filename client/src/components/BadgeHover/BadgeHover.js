import React from "react";
import "./BadgeHover.scss";
import PropTypes from "prop-types";

export const BadgeHover = (props) => {
  return (
    <div className="badgeHover rounded">
      <h4>{props.name}</h4>
      <p>{props.requirement}</p>
    </div>
  );
};

BadgeHover.propTypes = {
  name: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
};
