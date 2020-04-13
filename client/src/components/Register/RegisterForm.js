import React, { useState } from "react";
import Button from '../Button/Button';
import '../Register/RegisterForm.scss';
import axios from "axios";



export default function RegisterForm(props) {

  const [email, setEmail] = useState(props.email || "");
  const [password, setPassword] = useState(props.password || "");
  const [confirmPassword, setConfirmPassword] = useState(props.confirmPassword || "");
  const [firstName, setFirstName] = useState(props.firstName || "");
  const [lastName, setLastName] = useState(props.lastName || "");
  const [username, setUsername] = useState(props.username || "");


  //Possibly implement axios over fetch?
  function handleSubmit() {

    const data = { email, password, confirmPassword, firstName, lastName, username };

    axios.post(`/register`, data);
  }


  return (

    <main className="register__card">
      <h3>Register</h3>
      <form onSubmit={(event => event.preventDefault())} autoComplete="off">
        <select className="browser-default custom-select">
          <option selected>Account Type</option>
          <option value="1">Villager</option>
          <option value="2">Adventurer</option>
        </select>
        <input
          name="firstName"
          type="text"
          placeholder={"Enter First Name"}
          value={firstName}
          data-testid="first-name-input"
          onChange={event => setFirstName(event.target.value)}
        />
        <input
          name="lastName"
          type="text"
          placeholder={"Enter Last Name"}
          value={lastName}
          data-testid="last-name-input"
          onChange={event => setLastName(event.target.value)}
        />
        <input
          name="username"
          type="text"
          placeholder={"Enter username"}
          value={username}
          data-testid="useranem-input"
          onChange={event => setUsername(event.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder={"Enter email"}
          value={email}
          data-testid="email-input"
          onChange={event => setEmail(event.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder={"Enter password"}
          value={password}
          data-testid="password-input"
          onChange={event => setPassword(event.target.value)}
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder={"Confirm password"}
          value={confirmPassword}
          data-testid="confirmPassword-input"
          onChange={event => setConfirmPassword(event.target.value)}
        />
      </form>
      <section className="register__actions">
        <Button confirm>Next</Button>
        <Button danger>Cancel</Button>
      </section>
    </main>
  );
}