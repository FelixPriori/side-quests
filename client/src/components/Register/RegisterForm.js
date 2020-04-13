import React from "react";
import './RegisterForm.scss';
import Button from '../Button/Button';

export default function RegisterForm(props) {
  return (
    <section className="register">
      <h3>Register</h3>
      <form onSubmit={event => event.preventDefault()} autoComplete="off">
        <select className="browser-default custom-select">
          <option selected>Account Type</option>
          <option value="1">Villager</option>
          <option value="2">Adventurer</option>
        </select>
        <input
          name="firstName"
          type="text"
          placeholder={"Enter First Name"}
          value={props.firstName}
          data-testid="first-name-input"
        />
        <input
          name="lastName"
          type="text"
          placeholder={"Enter Last Name"}
          value={props.lastName}
          data-testid="last-name-input"
        />
        <input
          name="username"
          type="text"
          placeholder={"Enter username"}
          value={props.username}
          data-testid="useranem-input"
        />
        <input
          name="email"
          type="email"
          placeholder={"Enter email"}
          value={props.email}
          data-testid="email-input"
        />
        <input
          name="password"
          type="password"
          placeholder={"Enter password"}
          data-testid="password-input"
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder={"Confirm password"}
          data-testid="confirmPassword-input"
        />
      </form>
      <section className="register__actions">
        <Button confirm>Next</Button>
        <Button danger>Cancel</Button>
      </section>
    </section>
  );
}