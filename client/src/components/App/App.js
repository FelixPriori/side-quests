import React from 'react';
import './App.scss';

import AllClasses from '../AllClasses/AllClasses';
import Navbar from '../Navbar/Navbar';
import LoginForm from '../Login/LoginForm';

const { data } = require('../../__mock__/data.js');
const { classesData, classesProgessData } = data;

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <LoginForm />
        {/* <AllClasses classesData={classesData} classesProgessData={classesProgessData} /> */}
      </main>
    </div>
  );
}
