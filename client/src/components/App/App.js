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

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const CLASSES = 'CLASSES';
const CREATE = 'CREATE';
const SHOW = 'SHOW';
const PROFILE = 'PROFILE';
const EDIT = 'EDIT';
let sessions;
let username;
let adventurer;

export default function App() {
  const [view, setView] = useState(
    sessions
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
      setState({
        classesProgressData: result[2].data,
        classesData: result[3],
        userData: result[0].data,
        userQuests: [1]
      });
      sessions = state.userData.length ? true : false;
      adventurer = state.userData.length ? state.userData.adventurer : false;
      username = state.userData.length ? state.userData.name : false;
    })
  }, []);

  const { classesData, classesProgressData, userData, userQuests } = state;

  const changeView = (viewType) => {
    setView(viewType);
  }

  return (
    <div className="App">
      {sessions
        ? <Navbar
          user={username}
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
        {view === CLASSES && <AllClasses classesData={classesData} classesProgressData={classesProgressData} />}
        {view === REGISTER && <RegisterForm />}
        {view === CREATE && <CreateQuestForm />}
        {view === SHOW
          && <ClassSelection
            classesData={classesData}
            classesProgressData={classesProgressData}
            questData={userQuests}
          />}
        {view === PROFILE && <Profile onEdit={() => changeView(EDIT)} userData={userData} />}
        {view === EDIT && <RegisterForm userData={userData} onProfile={() => changeView(PROFILE)} />}
      </main>
    </div>
  );
}
