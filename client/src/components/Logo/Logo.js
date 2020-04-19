import React from "react";
import './Logo.scss';

export default function Logo() {
  return <div className="logo-div">
    <img className="logo" src="/images/scrollIcon.png"></img>
    <div className="letters-div">
      <div className="s-div">
        <h1>S</h1>
        <p>ide</p>
      </div>
      <div className="q-div">
        <h1>Q</h1>
        <p>uests</p>
      </div>
    </div>
  </div> 
}