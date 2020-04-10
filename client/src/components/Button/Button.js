import React from "react";

const classnames = require('classnames');

export default function Button(props) {
  const buttonClass = classnames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger
  });
  return (
    <button className={buttonClass}>
      {props.children}
    </button>
  );
}
