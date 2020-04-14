import React, { setState, useState, useEffect } from 'react';
import './App.scss';
import axios from "axios";

import AllClasses from '../AllClasses/AllClasses';
import Navbar from '../Navbar/Navbar';
import LoginForm from '../Login/LoginForm';
import RegisterForm from '../Register/RegisterForm';
import CreateQuestForm from '../CreateQuest/CreateQuestForm';
import ClassSelection from '../ClassSelection/ClassSelection';
import Profile from '../Profile/Profile';

const { data } = require('../../__mock__/data.js');
const { classesData, classesProgessData, userData, questData } = data;

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const CLASSES = 'CLASSES';
const CREATE = 'CREATE';
const SHOW = 'SHOW';
const PROFILE = 'PROFILE';
const EDIT = 'EDIT';

const sessions = { id: true };
const adventurer = true;
const user = 'test';

export default function App() {
  const [view, setView] = useState(
    sessions.id
      ? adventurer
        ? SHOW
        : CREATE
      : LOGIN
  );

  const [state, setState] = useState({
    classesProgressData: [],
    classesData: [],
    userData: [],
    userQuests: []
  });

  useEffect(() => {
    Promise.all([
      axios
        .get('/checkSession')
        .catch(error => console.log(error)),
      axios
        .get('/userQuests')
        .catch(error => console.log(error)),
      axios
        .get('/userClassProgress')
        .catch(error => console.log(error)),
      axios
        .get('/quests')
        .catch(error => console.log(error))
    ]).then(result => {
      console.log(result);
      setState({
        classesProgressData: result[2].data,
        classesData: result[3],
        userData: result[0].data,
        userQuests: [1]
      });
    })
  }, []);



  const changeView = (viewType) => {
    setView(viewType);
  }

  return (
    <div className="App">
      {sessions.id
        ? <Navbar
          user={user}
          adventurer={adventurer}
          onQuests={() => changeView(SHOW)}
          onLogout={() => changeView(LOGIN)}
          onCreate={() => changeView(CREATE)}
          onLogout={() => changeView(LOGIN)}
          onLogin={() => changeView(LOGIN)}
          onRegister={() => changeView(REGISTER)}
          onProgress={() => changeView(CLASSES)}
          onProfile={() => changeView(PROFILE)}
        />
        : <Navbar
          onLogin={() => changeView(LOGIN)}
          onRegister={() => changeView(REGISTER)}
        />
      }
      <main>
        {view === LOGIN && <LoginForm />}
        {view === CLASSES && <AllClasses classesData={classesData} classesProgessData={classesProgessData} />}
        {view === REGISTER && <RegisterForm />}
        {view === CREATE && <CreateQuestForm />}
        {view === SHOW && <ClassSelection classesData={classesData} classesProgessData={classesProgessData} />}
        {view === PROFILE && <Profile onEdit={() => changeView(EDIT)} userData={userData} />}
        {view === REGISTER && <RegisterForm />}
        {view === CREATE && <CreateQuestForm />}
        {view === SHOW
          && <ClassSelection
            classesData={classesData}
            classesProgessData={classesProgessData}
            questData={questData}
          />}
        {view === PROFILE && <Profile onEdit={() => changeView(EDIT)} userData={userData} />}
        {view === EDIT && <RegisterForm userData={userData} onProfile={() => changeView(PROFILE)} />}
      </main>
    </div>
  );
}
