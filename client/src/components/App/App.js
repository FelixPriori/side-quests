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
import ChatWindow from '../ChatWindow/ChatWindow';
import VillagerQuestList from '../VillagerQuestList/VillagerQuestList';

import openSocket from "socket.io-client";

const { data } = require('../../__mock__/data.js');

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const CLASSES = 'CLASSES';
const CREATE = 'CREATE';
const SHOW = 'SHOW';
const PROFILE = 'PROFILE';
const EDIT = 'EDIT';
const LOADING = 'LOADING';
const CHAT = 'CHAT';
const VILLAGER_QUESTS = 'VILLAGER_QUESTS';

export default function App() {
  const [view, setView] = useState(LOGIN);

  const [state, setState] = useState({
    classesProgressData: [],
    classesData: [],
    userData: {},
    userQuests: [],
    villagers: [],
    badges: [],
    userBadges: [],
    socket: [],
    chatMessages: [],
    knownUsers: {},
    classBadges: [],
    questsByVillager: []
  });

  function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
  }

  const [sessions, setSessions] = useState(!isEmpty(state.userData) ? state.userData.id : 0);
  const [adventurer, setAdventurer] = useState(!isEmpty(state.userData) ? state.userData.adventurer : false);
  const [username, setUsername] = useState(!isEmpty(state.userData) ? state.userData.first_name : "");

  useEffect(() => {
    axios
      .get('/checkSession')
      .then(response => {
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

  const fetchUserData = () => {
    axios
      .get('/checkSession')
      .then(response => {
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
      })
      .catch(e => console.log(e))
  }

  const fetchQuestsByVillager = () => {
    axios
      .get(`/users/${state.userData.id}/quests`)
      .then(response => {
        setState(prevState => {
          return {
            ...prevState,
            questsByVillager: response.data
          }
        })
      })
  }

  //Socket.io
  const addNewMessage = function (msgObj) {
    setState(prevState => {
      return {
        ...prevState,
        chatMessages: [...prevState.chatMessages,
        {
          message: msgObj.msg,
          userData: prevState.knownUsers[msgObj.userId]

        }]
      }
    });
  };

  const newUserCheck = function (msgObj) {
    if (state.knownUsers[msgObj.userId]) {
      addNewMessage(msgObj);
    } else {
      axios.get(`/users/${msgObj.userId}`).then(results => {

        setState(prevState => {
          return {
            ...prevState,
            knownUsers: { ...prevState.knownUsers, [msgObj.userId]: results.data[0] }
          }
        });
        addNewMessage(msgObj)
      })
    }
  }

  const openNewSocket = () => {
    let socket = openSocket('localhost:8081');

    socket.on('connect', function () {
      console.log('connected!');

      socket.on('chat message', (msgObj) => {
        newUserCheck(msgObj);
      });
      setState(prevState => {
        return {
          ...prevState,
          socket: socket
        };
      });
    });
  }


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

  const fetchClassBadges = id => {
    return axios
      .get(`/classes/${id}/badges`)
      .then(response => {
        setState(prevState => {
          return {
            ...prevState,
            classBadges: response.data
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
      {sessions
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
          onChat={() => changeView(CHAT)}
          onVillagerQuests={() => changeView(VILLAGER_QUESTS)}
        />
        : <Navbar
          onLogin={() => changeView(LOGIN)}
          onRegister={() => changeView(REGISTER)}
        />
      }
      <main>
        {view === LOADING && <Loading />}
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
        {view === REGISTER && <RegisterForm onProfile={() => changeView(PROFILE)} />}
        {view === CREATE && <CreateQuestForm />}
        {view === SHOW
          && <ClassSelection
            state={state}
            fetchQuests={fetchQuests}
            fetchClasses={fetchClasses}
            fetchProgress={fetchProgress}
            fetchVillagers={fetchVillagers}
            fetchBadges={fetchBadges}
            fetchClassBadges={fetchClassBadges}
            fetchUserBadges={fetchUserBadges}
          />}
        {view === PROFILE &&
          <Profile
            onEdit={() => changeView(EDIT)}
            fetchBadges={fetchBadges}
            fetchUserBadges={fetchUserBadges}
            fetchUserData={fetchUserData}
            state={state}
            edit={true}
          />}
        {view === EDIT &&
          <RegisterForm
            userData={state.userData}
            onProfile={changeView}
          />}
        {view === CHAT &&
          <ChatWindow
            socket={state.socket}
            openNewSocket={openNewSocket}
            messages={state.chatMessages}
            loggedInUser={state.userData}
          />}
        {view === VILLAGER_QUESTS &&
          <VillagerQuestList state={state} fetchQuestsByVillager={fetchQuestsByVillager} fetchUserData={fetchUserData} />}
      </main>
    </div>
  );
}
