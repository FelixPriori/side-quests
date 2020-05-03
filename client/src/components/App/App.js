import React from "react";
import "./App.scss";

import AllClasses from "../AllClasses/AllClasses";
import Navbar from "../Navbar/Navbar";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Register/RegisterForm";
import CreateQuestForm from "../CreateQuest/CreateQuestForm";
import ClassSelection from "../ClassSelection/ClassSelection";
import Profile from "../Profile/Profile";
import Loading from "../Loading/Loading";
import VillagerQuestList from "../VillagerQuestList/VillagerQuestList";
import TakenQuests from "../TakenQuests/TakenQuests";
import About from "../About/About";
import Adventurer from "../Adventurer/Adventurer";
import Villager from "../Villager/Villager";
import Up from "../Up/Up";
import TeaserPage from "../TeaserPage/TeaserPage";
import GuestProfile from "../GuestProfile/GuestProfile";
import { useAppData } from "../../hooks/useAppData";

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const CLASSES = "CLASSES";
const CREATE = "CREATE";
const SHOW = "SHOW";
const PROFILE = "PROFILE";
const EDIT = "EDIT";
const LOADING = "LOADING";
const VILLAGER_QUESTS = "VILLAGER_QUESTS";
const TAKEN = "TAKEN";
const ABOUT = "ABOUT";
const TEASER = "TEASER";
const GUEST_PROFILE = "GUEST_PROFILE";

export default function App() {
  const {
    state,
    getGuestProfile,
    handleLogout,
    handleLogin,
    changeView,
    setState,
  } = useAppData();

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
          onVillagerQuests={() => changeView(VILLAGER_QUESTS)}
          onTaken={() => changeView(TAKEN)}
          onAbout={() => changeView(ABOUT)}
        />
      ) : (
        <Navbar
          onAbout={() => changeView(ABOUT)}
          onLogin={() => changeView(LOGIN)}
          onRegister={() => changeView(REGISTER)}
          onTeaser={() => changeView(TEASER)}
        />
      )}
      <main>
        {state.adventurer && state.loggedIn && <Adventurer />}
        {!state.adventurer && state.loggedIn && <Villager />}
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
            onGuestProfile={getGuestProfile}
          />
        )}
        {state.view === PROFILE && (
          <Profile onEdit={() => changeView(EDIT)} state={state} edit={true} />
        )}
        {state.view === EDIT && (
          <RegisterForm
            userData={state.userData}
            onLogin={handleLogin}
            onProfile={() => changeView(PROFILE)}
          />
        )}
        {state.view === VILLAGER_QUESTS && (
          <VillagerQuestList state={state} setState={setState} />
        )}
        {state.view === TAKEN && (
          <TakenQuests
            state={state}
            setState={setState}
            onGuestProfile={getGuestProfile}
          />
        )}
        {state.view === ABOUT && <About />}
        {state.view === TEASER && <TeaserPage state={state} />}
        {state.view === GUEST_PROFILE && <GuestProfile state={state} />}
        <Up />
      </main>
    </div>
  );
}
