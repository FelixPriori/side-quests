import React, { useState } from "react";
import "./ChatInput.scss";

export default function ChatInput(props) {
  const [message, setMessage] = useState("");

  return (
    <div className="chatInput">
      <form className="input-form">
        <input
          className="input"
          name="message"
          type="text"
          placeholder={"Send Message"}
          value={message}
          data-testid="message-input"
          onChange={(event) => setMessage(event.target.value)}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onSubmit(message);
            setMessage("");
          }}
          type="submit"
          className="btn btn-primary"
        >
          Send
        </button>
      </form>
    </div>
  );
}
