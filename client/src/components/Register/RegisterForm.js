import React, { useState } from "react";
import axios from 'axios';
import './RegisterForm.scss';
import Button from '../Button/Button';

export default function RegisterForm(props) {

  const edit = props.userData ? true : false;
  const [accountType, setAccountType] = useState(props.userData ? props.userData.adventurer : "");
  const [firstName, setFirstName] = useState(props.userData ? props.userData.first_name : "");
  const [lastName, setLastName] = useState(props.userData ? props.userData.last_name : "");
  const [username, setUsername] = useState(props.userData ? props.userData.username : "");
  const [email, setEmail] = useState(props.userData ? props.userData.email : "");
  const [avatar, setAvatar] = useState(props.userData ? props.userData.avatar : "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [confirmChangePassword, setConfirmChangePassword] = useState("");
  const [bio, setBio] = useState("");


  //Possibly implement axios over fetch?
  function handleSubmit() {
    const data = { email, password, confirmPassword, firstName, lastName, username, accountType, avatar };
    axios.post(`/register`, data)
      .then(() => props.onLogin())
      .catch(e => setError(e.response.data));
  }

  //if props.edit then use this for the onclick instead
  function handleEditSubmit() {
    const data = { email, password, confirmPassword, confirmChangePassword, firstName, lastName, username, accountType, avatar, bio };
    axios.post('/users/edit', data)
      .then(() => props.onLogin(true))
      .catch(e => setError(e.response.data));
  }

  return (
    <section className="register">
      {
        edit
          ? <h3>Edit Profile</h3>
          : <h3>Register</h3>
      }
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={(event => event.preventDefault())} autoComplete="off">
        <select onChange={event => setAccountType(event.currentTarget.value)} className="browser-default custom-select">
          <option defaultValue>Account Type</option>
          <option value="0">Villager</option>
          <option value="1">Adventurer</option>
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
          name="avatar"
          type="url"
          placeholder={"Link to avatar (optional)"}
          value={avatar}
          data-testid="avatar-input"
          onChange={event => setAvatar(event.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder={"Enter new password"}
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
        {edit ?
          <form onSubmit={(event => event.preventDefault())} autoComplete="off">
            Enter current password to confirm changes:
          <input
              name="password"
              type="password"
              placeholder={"Enter password"}
              value={confirmChangePassword}
              data-testid="password-input"
              onChange={event => setConfirmChangePassword(event.target.value)}
            />
          </form>
          : null
        }


      </form>
      <section className="register__actions">
        {edit
          ? <section>
            <Button onClick={props.onProfile} danger>Cancel</Button>
            <Button onClick={() => handleEditSubmit()} confirm>Update</Button>
          </section>
          : <Button onClick={() => handleSubmit()} confirm>Create</Button>
        }
      </section>
    </section>



  );
}