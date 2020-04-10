import React from "react";
import './Button.scss';

const classnames = require('classnames');

export default function Button(props) {
  const buttonClass = classnames("btn", {
    "btn-outline-secondary": props.navbar,
    "btn-primary": props.confirm,
    "btn-danger": props.danger,
  });
  return (
    <button className={buttonClass}>
      {props.children}
    </button>
  );
}