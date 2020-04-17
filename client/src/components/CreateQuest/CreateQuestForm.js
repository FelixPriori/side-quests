import React, { useState, useEffect } from 'react';
import './CreateQuestForm.scss';
import Button from '../Button/Button';
import axios from 'axios';

export default function CreateQuestForm(props) {
  const [questType, setQuestType] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit() {
    const data = { questType, name, description, address };
    axios.post('/quests/new', data)
      .then(() => props.onCreate())
      .catch(e => setError(e.response.data));
  }

  const changeQuestType = type => {
    if (type === 'Type of Quest') {
      return;
    }
    setQuestType(type);
  }

  return (
    <section className="create-quest">
      <h3>Create Quest</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={event => event.preventDefault()} autoComplete="off">
        <select onChange={event => changeQuestType(event.currentTarget.value)} className="browser-default custom-select">
          <option defaultValue>Type of Quest</option>
          <option value="1">Errand</option>
          <option value="2">Entertainment</option>
          <option value="3">Animal Care</option>
          <option value="4">Workout</option>
          <option value="5">Lesson</option>
          <option value="6">Food</option>
          <option value="7">Technical assistance</option>
        </select>
        <input
          name="title"
          type="text"
          placeholder={"Name your quest"}
          value={name}
          data-testid="name-input"
          onChange={event => setName(event.target.value)}
        />
        <textarea
          rows="4"
          cols="50"
          name="description"
          type="text"
          placeholder={"Describe your quest"}
          value={description}
          data-testid="description-input"
          onChange={event => setDescription(event.target.value)}
        />
        <input
          name="address"
          type="text"
          placeholder={"(OPTIONAL) Enter address"}
          value={address}
          data-testid="address-input"
          onChange={event => setAddress(event.target.value)}
        />
      </form>
      <section className="register__actions">
        <Button onClick={handleSubmit} confirm>Confirm</Button>
        <Button danger>Cancel</Button>
      </section>
    </section>
  )
}