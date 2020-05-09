import React from "react";
import PropTypes from "prop-types";

import { Badge } from "../Badge/Badge";
import "./BadgeBox.scss";

export const BadgeBox = (props) => {
  const { lockedBadges, badges } = props;
  const unlocked =
    badges && badges.map((badge) => <Badge key={badge.id} badge={badge} />);
  const locked =
    lockedBadges &&
    lockedBadges.map((badge) => (
      <Badge key={badge.id} badge={badge} locked={true} />
    ));

  return (
    <div className="badgeBox rounded">
      {unlocked}
      {locked}
    </div>
  );
};

BadgeBox.propTypes = {
  lockedBadges: PropTypes.array.isRequired,
  badges: PropTypes.array.isRequired,
};
