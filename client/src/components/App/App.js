import React, { setState, useState } from 'react';
import './App.scss';

import AllClasses from '../AllClasses/AllClasses';
import Navbar from '../Navbar/Navbar';
import LoginForm from '../Login/LoginForm';
import RegisterForm from '../Register/RegisterForm';
import CreateQuestForm from '../CreateQuest/CreateQuestForm';
import ClassSelection from '../ClassSelection/ClassSelection';

const { data } = require('../../__mock__/data.js');
const { classesData, classesProgessData } = data;

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const CLASSES = 'CLASSES';
const CREATE = 'CREATE';
const SHOW = 'SHOW';

const sessions = {id: true};
const adventurer = true;
const user = 'test';

export default function App() {
  const [ view, setView ] = useState( 
    sessions.id 
    ? adventurer
      ? SHOW
      : CREATE
    : LOGIN 
  );

  const changeView = (viewType) => {
    console.log('YO!!!', viewType)
    setView(viewType);
  }

  return (
    <div className="App">
      { sessions.id 
        ? <Navbar
              user={user}
              adventurer={adventurer}
              onQuests={() => changeView(SHOW)}
              onLogout={() => changeView(LOGIN)}
              onCreate={() => changeView(CREATE)} 
              onLogout={() => changeView(LOGIN)}
              onLogin={() => changeView(LOGIN)} 
              onRegister={() => changeView(REGISTER)}
            />
        : <Navbar 
            onLogin={() => changeView(LOGIN)} 
            onRegister={() => changeView(REGISTER)}
          />
      }
      <main>
        {view === LOGIN && <LoginForm/>}
        {view === CLASSES && <AllClasses classesData={classesData} classesProgessData={classesProgessData} />}
        {view === REGISTER && <RegisterForm/>}
        {view === CREATE && <CreateQuestForm/>}
        {view === SHOW && <ClassSelection classesData={classesData} classesProgessData={classesProgessData} />}
      </main>
    </div>
  );
}
