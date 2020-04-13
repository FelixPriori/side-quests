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
              ? <Button navbar>View Quests</Button>
              : <Button navbar>Create Quest</Button>
            }
            <Button navbar>Logout</Button>
          </span>
        : <span className="nav-items">
            <Button navbar>Login</Button>
            <Button navbar>Register</Button>
          </span>
      }
    </header>
  )
}