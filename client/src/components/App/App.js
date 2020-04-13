import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import AllClasses from '../AllClasses/AllClasses';
import Navbar from '../Navbar/Navbar';

const { data } = require('../../__mock__/data.js');
const { classesData, classesProgessData } = data;

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <AllClasses classesData={classesData} classesProgessData={classesProgessData} />
      </main>
    </div>
  );
}
