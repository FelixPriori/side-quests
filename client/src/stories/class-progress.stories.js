import React from 'react';
import ClassProgress from '../components/ClassProgress/ClassProgress';

// (class_id, adventurer_id, level, experience, quest_count)
const data = {
  id: 1,
  level: 2,
  experience: 100,
  quest_count: 3
};
export default {title: 'Class Progress'}
export const classProgress = () => <ClassProgress data={data}/>