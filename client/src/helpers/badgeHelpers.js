const checkLocked = (badges, userBadges) => {
  const lockedBadges =
    badges &&
    badges.filter((badge) => {
      const aquired = userBadges.find((userBadge) => userBadge.id === badge.id);
      if (!aquired) {
        return true;
      }
      return false;
    });
  return lockedBadges;
};

const filterLocked = (lockedBadges, availableBadges) => {
  const unlocked =
    availableBadges &&
    availableBadges.filter((badge) => {
      const locked = lockedBadges.find((locked) => locked.id === badge.id);
      if (!locked) {
        return true;
      }
      return false;
    });
  return unlocked;
};

export { checkLocked, filterLocked };
