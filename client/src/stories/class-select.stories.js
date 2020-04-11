import React from 'react';

import ClassSelection from '../components/ClassSelection/ClassSelection';

const classesData = [
  {
    name: 'Rogue',
    description: 'Rogues like to help people from the shadows by sneaking to the nearest store to deliver needed supplies'
  },
  {
    name : 'Bard',
    description: 'Bards loves to entertain. They specialize in letting the imagination run wild and help people think of happy thoughts for a while.'
  },
  {
    name: 'Druid',
    description: 'Druids love a companion and are happy to help your furry friends stay in tip top shape. Whether it\s babysitting, or simply giving the dog a walk, Druids are happy to help!'
  }
];
export default {title: 'Class Selection'}
export const pickClass = () => <ClassSelection classesData={classesData}/>