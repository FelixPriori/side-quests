import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

import AllClasses from '../AllClasses/AllClasses';
import Navbar from '../Navbar/Navbar';
import LoginForm from '../Login/LoginForm';
import RegisterForm from '../Register/RegisterForm';
import CreateQuestForm from '../CreateQuest/CreateQuestForm';
import ClassSelection from '../ClassSelection/ClassSelection';
import Profile from '../Profile/Profile';
import Loading from '../Loading/Loading';
import VillagerQuestList from '../VillagerQuestList/VillagerQuestList';
import TakenQuests from '../TakenQuests/TakenQuests';

// import openSocket from 'socket.io-client';
// import ChatWindow from '../ChatWindow/ChatWindow';

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';
const CLASSES = 'CLASSES';
const CREATE = 'CREATE';
const SHOW = 'SHOW';
const PROFILE = 'PROFILE';
const EDIT = 'EDIT';
const LOADING = 'LOADING';
const VILLAGER_QUESTS = 'VILLAGER_QUESTS';
const TAKEN = 'TAKEN';
// const CHAT = 'CHAT';

export default function App() {
  const [state, setState] = useState({
    classesProgressData: [],
    classesData: [],
    userData: {},
    userQuests: [],
    villagers: [],
    badges: [],
    userBadges: [],
    classBadges: [],
    questsByVillager: [],
    questsByAdventurer: [],
    sessions: 0,
    adventurer: false,
    username: '',
    view: LOGIN,
    loggedIn: false,
    // socket: [],
    // chatMessages: [],
    // knownUsers: {},
  });

  function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
  }

  useEffect(() => {
    axios
      .get('/checkSession')
      .then((response) => {
        if (!isEmpty(response.data[0])) {
          setState((prevState) => {
            return {
              ...prevState,
              userData: response.data[0],
              view: response.data[0]
                ? response.data[0].adventurer
                  ? SHOW
                  : CREATE
                : LOGIN,
              sessions: response.data[0].id,
              adventurer: response.data[0].adventurer,
              username: response.data[0].first_name,
              loggedIn: true,
            };
          });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (state.loggedIn) {
      const getUserBadges = axios.get(`/users/${state.userData.id}/badges`);
      const getUserQuest = axios.get('/quests');
      const getClasses = axios.get('/classes');
      const getClassesProgress = axios.get('/userClassProgress');
      const getVillagers = axios.get('/villagers');
      const getBadges = axios.get('/badges');
      const getQuestsByVillager = axios.get(`/users/${state.userData.id}/quests`);
      const getQuestsByAdventurer = axios.get(`/users/adventurer/${state.userData.id}/quests`);
      const getClassBadges = axios.get(`/classes/${state.userData.id}/badges`);
      Promise.all([
        getUserBadges,
        getUserQuest,
        getClasses,
        getClassesProgress,
        getVillagers,
        getBadges,
        getQuestsByVillager,
        getQuestsByAdventurer,
        getClassBadges,
      ])
        .then(
          ([
            { data: userBadges },
            { data: userQuests },
            { data: classesData },
            { data: classesProgressData },
            { data: villagers },
            { data: badges },
            { data: questsByVillager },
            { data: questsByAdventurer },
            { data: classBadges },
          ]) => {
            setState({
              ...state,
              userBadges,
              userQuests,
              classesData,
              classesProgressData,
              villagers,
              badges,
              questsByVillager,
              questsByAdventurer,
              classBadges,
            });
          }
        )
        .catch((err) => console.log(err));
    }
  }, [state.loggedIn]);



  //Socket.io
  // const addNewMessage = function (msgObj) {
  //   setState((prevState) => {
  //     return {
  //       ...prevState,
  //       chatMessages: [
  //         ...prevState.chatMessages,
  //         {
  //           message: msgObj.msg,
  //           userData: prevState.knownUsers[msgObj.userId],
  //         },
  //       ],
  //     };
  //   });
  // };

  // const newUserCheck = function (msgObj) {
  //   if (state.knownUsers[msgObj.userId]) {
  //     addNewMessage(msgObj);
  //   } else {
  //     axios.get(`/users/${msgObj.userId}`).then((results) => {
  //       setState((prevState) => {
  //         return {
  //           ...prevState,
  //           knownUsers: {
  //             ...prevState.knownUsers,
  //             [msgObj.userId]: results.data[0],
  //           },
  //         };
  //       });
  //       addNewMessage(msgObj);
  //     });
  //   }
  // };

  // const openNewSocket = () => {
  //   let socket = openSocket('localhost:8081');

  //   socket.on('connect', function () {
  //     socket.on('chat message', (msgObj) => {
  //       newUserCheck(msgObj);
  //     });
  //     setState((prevState) => {
  //       return {
  //         ...prevState,
  //         socket: socket,
  //       };
  //     });
  //   });
  // };

  const changeView = (viewType) => {
    setState({
      ...state,
      view: LOADING,
    });
    setTimeout(() => {
      setState({
        ...state,
        view: viewType,
      });
    }, 500);
  };

  const handleLogin = (edit) => {
    return axios
      .get('/checkSession')
      .then((response) => {
        setState((prevState) => {
          return {
            ...prevState,
            userData: response.data[0],
            sessions: response.data[0].id,
            adventurer: response.data[0].adventurer,
            username: response.data[0].first_name,
            loggedIn: true,
            view: edit ? PROFILE : response.data[0].adventurer ? SHOW : CREATE
          };
        });
      })
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    return axios
      .post('/logout')
      .then(() => {
        setState((prev) => ({
          ...prev,
          classesProgressData: [],
          classesData: [],
          userData: {},
          userQuests: [],
          villagers: [],
          badges: [],
          sessions: 0,
          adventurer: false,
          username: '',
          loggedIn: false,
          view: LOGIN
        }));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      {state.sessions ? (
        <Navbar
          user={state.username}
          adventurer={state.adventurer}
          onQuests={() => changeView(SHOW)}
          onCreate={() => changeView(CREATE)}
          onLogout={() => handleLogout()}
          onLogin={() => changeView(LOGIN)}
          onRegister={() => changeView(REGISTER)}
          onProgress={() => changeView(CLASSES)}
          onProfile={() => changeView(PROFILE)}
          // onChat={() => changeView(CHAT)}
          onVillagerQuests={() => changeView(VILLAGER_QUESTS)}
          onTaken={() => changeView(TAKEN)}
        />
      ) : (
          <Navbar
            onLogin={() => changeView(LOGIN)}
            onRegister={() => changeView(REGISTER)}
          />
        )}
      <main>
        {state.view === LOADING && <Loading />}
        {state.view === LOGIN && <LoginForm onLogin={() => handleLogin()} />}
        {state.view === CLASSES && (
          <AllClasses
            classesData={state.classesData}
            classesProgressData={state.classesProgressData}
          />
        )}
        {state.view === REGISTER && (
          <RegisterForm 
            onLogin={handleLogin} 
            onProfile={() => changeView(PROFILE)}
          />
        )}
        {state.view === CREATE && (
          <CreateQuestForm 
            onCreate={() => changeView(VILLAGER_QUESTS)}
            state={state}
            setState={setState}
          />
        )}
        {state.view === SHOW && (
          <ClassSelection
            state={state}
            setState={setState}
          // newUserCheck={newUserCheck}
          // openNewSocket={openNewSocket}
          // addNewMessage={addNewMessage}
          />
        )}
        {state.view === PROFILE && (
          <Profile onEdit={() => changeView(EDIT)} state={state} edit={true} />
        )}
        {state.view === EDIT && (
          <RegisterForm 
            userData={state.userData}
            onLogin={handleLogin}
            onProfile={changeView}
          />
        )}
        {/* {state.view === CHAT && (
          <ChatWindow
            socket={state.socket}
            openNewSocket={openNewSocket}
            messages={state.chatMessages}
            loggedInUser={state.userData}
          />
        )} */}
        {state.view === VILLAGER_QUESTS && <VillagerQuestList state={state} setState={setState} />}
        {state.view === TAKEN && <TakenQuests state={state} />}
      </main>
    </div>
  );
}
