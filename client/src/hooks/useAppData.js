import { useState, useEffect } from "react";
import axios from "axios";

const LOGIN = "LOGIN";
const CREATE = "CREATE";
const SHOW = "SHOW";
const PROFILE = "PROFILE";
const LOADING = "LOADING";
const TEASER = "TEASER";
const GUEST_PROFILE = "GUEST_PROFILE";

export function useAppData() {
  const [state, setState] = useState({
    classesProgressData: [],
    classesData: [],
    userData: {},
    userQuests: [],
    villagers: [],
    badges: [],
    userBadges: [],
    questsByVillager: [],
    questsByAdventurer: [],
    sessions: 0,
    adventurer: false,
    username: "",
    view: TEASER,
    loggedIn: false,
    adventurers: [],
    guestInfo: [],
    guestBadges: [],
  });

  function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
  }

  useEffect(() => {
    axios
      .get("/checkSession")
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
      const getUserQuest = axios.get("/quests");
      const getClasses = axios.get("/classes");
      const getClassesProgress = axios.get("/userClassProgress");
      const getVillagers = axios.get("/villagers");
      const getBadges = axios.get("/badges");
      const getQuestsByVillager = axios.get(
        `/users/${state.userData.id}/quests`
      );
      const getQuestsByAdventurer = axios.get(
        `/users/adventurer/${state.userData.id}/quests`
      );
      const getAdventurers = axios.get(`/adventurers`);
      Promise.all([
        getUserBadges,
        getUserQuest,
        getClasses,
        getClassesProgress,
        getVillagers,
        getBadges,
        getQuestsByVillager,
        getQuestsByAdventurer,
        getAdventurers,
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
            { data: adventurers },
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
              adventurers,
            });
          }
        )
        .catch((err) => console.log(err));
    } else {
      const getUserQuest = axios.get("/quests");
      const getVillagers = axios.get("/villagers");
      const getClasses = axios.get("/classes");
      Promise.all([getUserQuest, getVillagers, getClasses])
        .then(
          ([
            { data: userQuests },
            { data: villagers },
            { data: classesData },
          ]) =>
            setState((prevState) => {
              return {
                ...prevState,
                userQuests,
                villagers,
                classesData,
              };
            })
        )
        .catch((e) => console.log(e));
    }
  }, [state.loggedIn]);

  const handleLogin = (edit) => {
    return axios
      .get("/checkSession")
      .then((response) => {
        setState((prevState) => {
          return {
            ...prevState,
            userData: response.data[0],
            sessions: response.data[0].id,
            adventurer: response.data[0].adventurer,
            username: response.data[0].first_name,
            loggedIn: true,
            view: edit ? PROFILE : response.data[0].adventurer ? SHOW : CREATE,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    return axios
      .post("/logout")
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
          username: "",
          loggedIn: false,
          view: LOGIN,
          adventurers: [],
          guestInfo: [],
          guestBadges: [],
        }));
      })
      .catch((error) => console.log(error));
  };

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

  const getGuestProfile = function (id) {
    const getUserInfo = axios.get(`/users/${id}`);
    const getUserBadges = axios.get(`/users/${id}/badges`);

    Promise.all([getUserInfo, getUserBadges])
      .then(([{ data: guestInfo }, { data: guestBadges }]) =>
        setState((prevState) => {
          return {
            ...prevState,
            guestInfo,
            guestBadges,
            view: GUEST_PROFILE,
          };
        })
      )
      .catch((e) => console.log(e));
  };

  return {
    state,
    getGuestProfile,
    handleLogout,
    handleLogin,
    changeView,
    setState,
  };
}
