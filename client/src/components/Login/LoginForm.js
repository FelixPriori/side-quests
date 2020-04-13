import React, { useState } from "react";
import Button from '../Button/Button';
import './LoginForm.scss';
import axios from "axios";


export default function LoginForm(props) {

  const [email, setEmail] = useState(props.email || "");
  const [password, setPassword] = useState(props.password || "");


  //Possibly implement axios over fetch?
  function handleSubmit() {

    const data = { email, password };

    axios.post(`/login`, data);
  }

  return (
    <main className="Login__card">
      <h3>Login</h3>
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
    </main >
  );
}