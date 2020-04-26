import React, { useState } from "react";
import './Navbar.scss';
import Logo from '../Logo/Logo';
import Dropdown from 'react-bootstrap/Dropdown';
import { List, Bell, Dot } from 'react-bootstrap-icons';

function LoginMenu(props) {
  return (
    <span className="nav-items">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          <List />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={props.onAbout}>About</Dropdown.Item>
          <Dropdown.Item onClick={props.onLogin}>Login</Dropdown.Item>
          <Dropdown.Item onClick={props.onRegister}>Register</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </span>
  );
}

function NotificationsBell(props) {
  const [newNotification, setNewNotification] = useState(true);
  return (
    <div className="notifications">
      <button 
        className="notification-button" 
        onClick={() => setNewNotification(newNotification ? false : true)}
      >
        <Bell className="notification-bell"/>
      </button>
      {newNotification && <span className="dot"></span>}
    </div>
  )
}

function UserMenu(props) {
  return (
    <span className="nav-items">
        <NotificationsBell/>
        <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          <img
            alt="avatar"
            className="avatar-icon"
            src={props.state.userData.avatar}>
          </img>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {props.adventurer
            ? <span className="button-group">
              <Dropdown.Item onClick={props.onAbout}>About</Dropdown.Item>
              <Dropdown.Item onClick={props.onQuests}>Quests</Dropdown.Item>
              <Dropdown.Item onClick={props.onTaken}>Accepted Quests</Dropdown.Item>
              <Dropdown.Item onClick={props.onProgress}>Progress</Dropdown.Item>
              <Dropdown.Item onClick={props.onProfile}>Profile</Dropdown.Item>
            </span>
            : <span className="button-group">
              <Dropdown.Item onClick={props.onAbout}>About</Dropdown.Item>
              <Dropdown.Item onClick={props.onCreate}>Create Quest</Dropdown.Item>
              <Dropdown.Item onClick={props.onVillagerQuests}>Quests</Dropdown.Item>
              <Dropdown.Item onClick={props.onProfile}>Profile</Dropdown.Item>
            </span>
          }
          <Dropdown.Item onClick={props.onLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </span>
  )
}

export default function Navbar(props) {
  return (
    <header className="nav-container">
      <Logo onClick={props.onAbout}/>
      {props.user
        ? <UserMenu {...props} />
        : <LoginMenu {...props} />
      }
    </header>
  )
}