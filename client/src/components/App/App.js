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

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const CLASSES = 'CLASSES';
const CREATE = 'CREATE';
const SHOW = 'SHOW';
const PROFILE = 'PROFILE';
const EDIT = 'EDIT';
const LOADING = 'LOADING';

export default function App() {
  const [view, setView] = useState(LOGIN);

  const [state, setState] = useState({
    classesProgressData: [],
    classesData: [],
    userData: {},
    userQuests: [],
    villagers: [],
    badges: [],
    userBadges: []
  });

  function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
  }

  const [ sessions, setSessions ] = useState(!isEmpty(state.userData) ? state.userData.id : 0);
  const [ adventurer, setAdventurer ] = useState(!isEmpty(state.userData) ? state.userData.adventurer : false);
  const [ username, setUsername ] = useState(!isEmpty(state.userData) ? state.userData.first_name : "");

  useEffect(() => {
    axios
      .get('/checkSession')
      .then(response => {
        console.log(response.data)
        if (!isEmpty(response.data[0])) {
          setSessions(response.data[0].id);
          setAdventurer(response.data[0].adventurer);
          setUsername(response.data[0].first_name);
        }
        setState(prevState => {
          return {
            ...prevState,
            userData: response.data[0]
          };
        });
        setView(
          response.data[0]
          ? response.data[0].adventurer
            ? SHOW
            : CREATE
          : LOGIN
        );
      })
      .catch(error => console.log(error))
  }, []);

  const changeView = (viewType) => {
    setView(LOADING)
    setTimeout(() => {
      setView(viewType)
    }, 500)
  };


  const fetchUserBadges = () => {
    return axios
      .get(`/users/${state.userData.id}/badges`)
      .then(response => {
        setState(prevState => {
          return {
            ...prevState,
            userBadges: response.data
          };
        });
      })
      .catch(error => console.log(error))
  }

  const fetchQuests = () => {
    return axios
      .get('/quests')
      .then(response => {
        setState(prevState => {
          return {
            ...prevState,
            userQuests: response.data
          };
        });
      })
      .catch(error => console.log(error))
  };

  const fetchClasses = () => {
    return axios
      .get('/classes')
      .then(response => {
        setState(prevState => {
          return {
            ...prevState,
            classesData: response.data
          };
        });
      })
      .catch(error => console.log(error));
  };

  const fetchProgress = () => {
    return axios
      .get('/userClassProgress')
      .then(response => {
        setState(prevState => {
          return {
            ...prevState,
            classesProgressData: response.data
          };
        });
      })
      .catch(error => console.log(error))
  };

  const fetchVillagers = () => {
    return axios
      .get('/villagers')
      .then(response => {
        setState(prevState => {
          return {
            ...prevState,
            villagers: response.data
          };
        });
      })
      .catch(error => console.log(error));
  };

  const fetchBadges = () => {
    return axios
      .get('/badges')
      .then(response => {
        setState(prevState => {
          return {
            ...prevState,
            badges: response.data
          };
        });
      })
      .catch(error => console.log(error));
  };

  const handleLogin = () => {
    return axios
      .get('/checkSession')
      .then(response => {
        setState(prevState => {
          return {
            ...prevState,
            userData: response.data[0]
          };
        });
        setSessions(response.data[0].id);
        setAdventurer(response.data[0].adventurer);
        setUsername(response.data[0].first_name);
        response.data[0].adventurer ? setView(SHOW) : setView(CREATE); 
      })
      .catch(error => console.log(error))
  };

  const handleLogout = () => {
    return axios
      .post('/logout')
      .then(() => {
        setState({
          classesProgressData: [],
          classesData: [],
          userData: {},
          userQuests: [],
          villagers: [],
          badges: []
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
        {view === LOGIN && 
          <LoginForm 
            onLogin={() => handleLogin()}
          />}
        {view === CLASSES && 
          <AllClasses 
            classesData={state.classesData} 
            classesProgressData={state.classesProgressData} 
            fetchProgress={fetchProgress}
            fetchClasses={fetchClasses}
          />}
        {view === REGISTER && <RegisterForm />}
        {view === CREATE && <CreateQuestForm />}
        {view === SHOW
          && <ClassSelection
            state={state}
            fetchQuests={fetchQuests}
            fetchClasses={fetchClasses}
            fetchProgress={fetchProgress}
            fetchVillagers={fetchVillagers}
            fetchBadges={fetchBadges}
          />}
        {view === PROFILE && 
          <Profile 
            onEdit={() => changeView(EDIT)} 
            fetchBadges={fetchBadges}
            state={state} 
          />}
        {view === EDIT && 
          <RegisterForm 
            userData={state.userData} 
            onProfile={() => changeView(PROFILE)}
          />}
      </main>
    </div>
  );
}
