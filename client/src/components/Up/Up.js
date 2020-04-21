import React, { useState, useEffect } from 'react';
import './Up.scss';

export default function Up() {

  const [show, setShow] = useState('hidden');

  const shouldItShow = () => {
    window.pageYOffset > 500
      ? setShow('visible')
      : setShow('hidden')
  };

  useEffect(() => {
    const checkScroll = () => {
      window.addEventListener("scroll", shouldItShow);
    }; 
    checkScroll();
    return () => {
      window.removeEventListener("scroll", shouldItShow);
    };
  });

  return (
    <button
      className="up"
      style={{ visibility: show }}
      onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
    >
      <img alt="scroll arrow" className="scrollArrow" src="/images/arrowForScroll.png"></img>
    </button>
  );
}