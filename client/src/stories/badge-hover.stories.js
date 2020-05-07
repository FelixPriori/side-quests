import React from "react";
import { BadgeHover } from "../components/BadgeHover/BadgeHover";

export default { title: "Badge Hover Box" };

export const badgeHover = () => (
  <BadgeHover
    title={badges[0].name}
    requirement={badges[0].requirement}
    classId={4}
  />
);

const badges = [
  {
    id: 1,
    name: "Master Chef",
    image:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/medal.png",
    requirement: "Complete 5 Alchemist Quests",
    int_requirement: 5,
    criteria_type: "quest",
    class_id: 6,
  },
  {
    id: 2,
    name: "Teach A Man To Fish",
    image:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/medal.png",
    requirement: "Complete 5 Mage Quests",
    int_requirement: 5,
    criteria_type: "quest",
    class_id: 5,
  },
  {
    id: 3,
    name: "One with body and mind",
    image:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/medal.png",
    requirement: "Complete 5 Monk Quests",
    int_requirement: 5,
    criteria_type: "quest",
    class_id: 4,
  },
  {
    id: 4,
    name: "Technological Wizard",
    image:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/medal.png",
    requirement: "Complete 5 Gadgeteer Quests",
    int_requirement: 5,
    criteria_type: "quest",
    class_id: 7,
  },
  {
    id: 5,
    name: "A stealthy friend",
    image:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/medal.png",
    requirement: "Complete 5 Rogue Quests",
    int_requirement: 5,
    criteria_type: "quest",
    class_id: 1,
  },
  {
    id: 6,
    name: "One with body and mind",
    image:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/medal.png",
    requirement: "Complete 5 Druid Quests",
    int_requirement: 5,
    criteria_type: "quest",
    class_id: 3,
  },
  {
    id: 7,
    name: "Crowd Favourite",
    image:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/medal.png",
    requirement: "Complete 5 Bard Quests",
    int_requirement: 5,
    criteria_type: "quest",
    class_id: 2,
  },
];
