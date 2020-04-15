import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from "axios";

import AllClasses from '../AllClasses/AllClasses';
import Navbar from '../Navbar/Navbar';
import LoginForm from '../Login/LoginForm';
import RegisterForm from '../Register/RegisterForm';
import CreateQuestForm from '../CreateQuest/CreateQuestForm';
import ClassSelection from '../ClassSelection/ClassSelection';
import Profile from '../Profile/Profile';
import Loading from '../Loading/Loading';

const { data } = require('../../__mock__/data.js');

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const CLASSES = 'CLASSES';
const CREATE = 'CREATE';
const SHOW = 'SHOW';
const PROFILE = 'PROFILE';
const EDIT = 'EDIT';
const LOADING = 'LOADING';

export default function App() {
  const [view, setView] = useState(LOADING);

  const [state, setState] = useState({
    classesProgressData: [],
    classesData: [],
    userData: {},
    userQuests: []
  });

  const [ sessions, setSessions ] = useState( state.userData.length ? state.userData.id : 0 );
  const [ adventurer, setAdventurer ] = useState( state.userData.length ? state.userData.adventurer : false );
  const [ username, setUsername ] = useState( state.userData.length ? state.userData.first_name : "" );

  useEffect(() => {
    Promise.all([
      axios
        .get('/checkSession')
        .catch(error => console.log(error)),
      axios
        .get('/quests')
        .catch(error => console.log(error)),
      axios
        .get('/userClassProgress')
        .catch(error => console.log(error)),
      axios
        .get('/classes')
        .catch(error => console.log(error))
    ]).then(result => {
      setState({
        userData: result[0].data,
        userQuests: result[1].data,
        classesProgressData: result[2].data,
        classesData: result[3].data
      });
      setSessions(result[0].data.length > 0 ? result[0].data[0].id : 0);
      setAdventurer(result[0].data.length > 0 ? result[0].data[0].adventurer : false);
      setUsername(result[0].data.length > 0 ? result[0].data[0].first_name : "");
      setView(
        result[0].data[0]
        ? result[0].data[0].adventurer
          ? SHOW
          : CREATE
        : LOGIN
      );
    })
  }, []);

  const { classesData, classesProgressData, userData, userQuests } = state;

  const changeView = (viewType) => {
    setView(LOADING)
    setTimeout(() => {
      setView(viewType)
    }, 500)
  };

  const handleLogin = () => {
    Promise.all([
      axios
        .get('/checkSession')
        .catch(error => console.log(error)),
      axios
        .get('/quests')
        .catch(error => console.log(error)),
      axios
        .get('/userClassProgress')
        .catch(error => console.log(error)),
      axios
        .get('/classes')
        .catch(error => console.log(error))
    ]).then(result => {
      setState({
        userData: result[0].data,
        userQuests: result[1].data,
        classesProgressData: result[2].data,
        classesData: result[3].data
      });
      setSessions(result[0].data.length > 0 ? result[0].data[0].id : 0);
      setAdventurer(result[0].data.length > 0 ? result[0].data[0].adventurer : false);
      setUsername(result[0].data.length > 0 ? result[0].data[0].first_name : "");
      changeView(SHOW)
    });
  };

  const handleLogout = () => {
    return axios
      .post('/logout')
      .then(() => {
        setState({
          classesProgressData: [],
          classesData: [],
          userData: {},
          userQuests: []
        });
        setSessions(0);
        setAdventurer(false);
        setUsername("");
        changeView(LOGIN); 
      })
      .catch(error => console.log(error))
  };

  return (
    <div className="App">
      { sessions
        ? <Navbar
          user={username}
          adventurer={adventurer}
          onQuests={() => changeView(SHOW)}
          onCreate={() => changeView(CREATE)}
          onLogout={() => handleLogout()}
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
        {view === LOADING && <Loading/>}
        {view === LOGIN && <LoginForm onLogin={() => handleLogin()}/>}
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
