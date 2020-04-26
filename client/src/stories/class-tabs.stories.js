import React from 'react';
import ClassTabs from '../components/ClassTabs/ClassTabs';


export default { title: 'ClassTabs' }

const classData = [
  {
    "id": 1,
    "name": "Rogue",
    "description": "Rogues like to help people from the shadows by sneaking to the nearest store to deliver needed supplies"
  },
  {
    "id": 2,
    "name": "Bard",
    "description": "Bards loves to entertain. They specialize in letting the imagination run wild and help people think of happy thoughts for a while."
  },
  {
    "id": 3,
    "name": "Druid",
    "description": "Druids love a companion and are happy to help your furry friends stay in tip top shape. Whether it's babysitting, or simply giving the dog a walk, Druids are happy to help!"
  },
  {
    "id": 4,
    "name": "Monk",
    "description": "Monks focus on mastering their body and mind. If you need an intro to Yoga or are  in need of a jogging partner, Monks will be happy to motivate!"
  },
  {
    "id": 5,
    "name": "Mage",
    "description": "Mages are known for their intellect and are happy to help those improve theirs. Like any good scholar, Mages will be sure to guide you to knowledge through tutoring or lessons."
  },
  {
    "id": 6,
    "name": "Alchemist",
    "description": "Alchemists love to serve… food that is. Constantly concocting different flavours that peak your palate, they are happy to share their discoveries and home cooked meals with people on an empty stomach."
  },
  {
    "id": 7,
    "name": "Gadgeteer",
    "description": "Gadgeteers are experts taking on the more technical tasks. They can help troubleshooting issues related to computers, electricity, plumbing, etc."
  }
];



export const classTabs = () => <ClassTabs classData={classData} />; 