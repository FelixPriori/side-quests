import React from "react";
import "./App.scss";

import AllClasses from "../AllClasses/AllClasses";
import Navbar from "../Navbar/Navbar";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Register/RegisterForm";
import CreateQuestForm from "../CreateQuest/CreateQuestForm";
import ClassSelection from "../ClassSelection/ClassSelection";
import { Profile } from "../Profile/Profile";
import Loading from "../Loading/Loading";
import VillagerQuestList from "../VillagerQuestList/VillagerQuestList";
import TakenQuests from "../TakenQuests/TakenQuests";
import About from "../About/About";
import Adventurer from "../Adventurer/Adventurer";
import Villager from "../Villager/Villager";
import Up from "../Up/Up";
import { TeaserPage } from "../TeaserPage/TeaserPage";
import GuestProfile from "../GuestProfile/GuestProfile";
import { useAppData } from "../../hooks/useAppData";

import { views } from "../../helpers/appViews";

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
          onQuests={() => changeView(views.SHOW)}
          onCreate={() => changeView(views.CREATE)}
          onLogout={() => handleLogout()}
          onLogin={() => changeView(views.LOGIN)}
          onRegister={() => changeView(views.REGISTER)}
          onProgress={() => changeView(views.CLASSES)}
          onProfile={() => changeView(views.PROFILE)}
          onVillagerQuests={() => changeView(views.VILLAGER_QUESTS)}
          onTaken={() => changeView(views.TAKEN)}
          onAbout={() => changeView(views.ABOUT)}
        />
      ) : (
        <Navbar
          onAbout={() => changeView(views.ABOUT)}
          onLogin={() => changeView(views.LOGIN)}
          onRegister={() => changeView(views.REGISTER)}
          onTeaser={() => changeView(views.TEASER)}
        />
      )}
      <main>
        {state.adventurer && state.loggedIn && <Adventurer />}
        {!state.adventurer && state.loggedIn && <Villager />}
        {state.view === views.LOADING && <Loading />}
        {state.view === views.LOGIN && (
          <LoginForm onLogin={() => handleLogin()} />
        )}
        {state.view === views.CLASSES && (
          <AllClasses
            classesData={state.classesData}
            classesProgressData={state.classesProgressData}
          />
        )}
        {state.view === views.REGISTER && (
          <RegisterForm
            onLogin={handleLogin}
            onProfile={() => changeView(views.PROFILE)}
          />
        )}
        {state.view === views.CREATE && (
          <CreateQuestForm
            onCreate={() => changeView(views.VILLAGER_QUESTS)}
            state={state}
            setState={setState}
          />
        )}
        {state.view === views.SHOW && (
          <ClassSelection
            state={state}
            setState={setState}
            onGuestProfile={getGuestProfile}
          />
        )}
        {state.view === views.PROFILE && (
          <Profile
            onEdit={() => changeView(views.EDIT)}
            userData={state.userData}
            userBadges={state.userBadges}
          />
        )}
        {state.view === views.EDIT && (
          <RegisterForm
            userData={state.userData}
            onLogin={handleLogin}
            onProfile={() => changeView(views.PROFILE)}
          />
        )}
        {state.view === views.VILLAGER_QUESTS && (
          <VillagerQuestList state={state} setState={setState} />
        )}
        {state.view === views.TAKEN && (
          <TakenQuests
            state={state}
            setState={setState}
            onGuestProfile={getGuestProfile}
          />
        )}
        {state.view === views.ABOUT && <About />}
        {state.view === views.TEASER && (
          <TeaserPage classesData={state.classesData} />
        )}
        {state.view === views.GUEST_PROFILE && <GuestProfile state={state} />}
        <Up />
      </main>
    </div>
  );
}
