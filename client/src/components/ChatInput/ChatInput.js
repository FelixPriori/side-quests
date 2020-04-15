import React, { useState } from "react";
import './ChatInput.scss';


export default function ChatInput(props) {

  const [message, setMessage] = useState("")

  return (
    <div className="chatInput">
      <input
        className="input"
        name="message"
        type="text"
        placeholder={"Send Message"}
        value={message}
        data-testid="message-input"
        onChange={event => setMessage(event.target.value)}
      /><button type="button" class="btn btn-primary">Send</button>
    </div>
  )
}