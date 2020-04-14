import React, { useState } from "react";
import Button from '../Button/Button';
import './LoginForm.scss';
import axios from "axios";


export default function LoginForm(props) {

  const [email, setEmail] = useState(props.email || "");
  const [password, setPassword] = useState(props.password || "");
  const [error, setError] = useState(null);

  //Possibly implement axios over fetch?
  function handleSubmit() {
    const data = { email, password };
    return axios
      .post(`/login`, data)
      .then(() => props.onLogin())
      .catch(e => setError(e.response.data));
  }

  return (
    <section className="login">
      <h3>Login</h3>
      { error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={(event) => event.preventDefault()} autoComplete="off">
        <input
          name="email"
          type="text"
          placeholder={"Enter Email"}
          value={email}
          data-testid="email-input"
          onChange={event => setEmail(event.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder={"Enter password"}
          data-testid="password-input"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </form>
      <section className="login__actions">
        <Button confirm onClick={() => handleSubmit()}>Login</Button>
      </section>
    </section>
  );
}