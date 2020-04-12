import React from "react";
import Button from '../Button/Button';
import './LoginForm.scss';

export default function LoginForm(props) {
  return (
    <main className="Login__card">
      <h3>Login</h3>
      <form onSubmit={event => event.preventDefault()} autoComplete="off">
        <input
          name="username"
          type="text"
          placeholder={"Enter username"}
          value={props.username}
          data-testid="useranem-input"
        />
        <input
          name="password"
          type="password"
          placeholder={"Enter password"}
          data-testid="password-input"
        />
      </form>
      <section className="login__actions">
        <Button confirm>Login</Button>
      </section>
    </main>
  );
}