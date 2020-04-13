import React from "react";
import './Navbar.scss';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

export default function Navbar(props) {
  return (
    <header className="nav-container">
      <Logo/>
      { props.user 
        ? <span className="nav-items">
            <h3>Welcome, {props.user}</h3>
            { props.adventurer 
              ? <Button navbar onClick={props.onQuests}>View Quests</Button>
              : <Button navbar onClick={props.onCreate}>Create Quest</Button>
            }
            <Button navbar onClick={props.onLogout}>Logout</Button>
          </span>
        : <span className="nav-items">
            <Button navbar onClick={props.onLogin}>Login</Button>
            <Button navbar onClick={props.onRegister}>Register</Button>
          </span>
      }
    </header>
  )
}