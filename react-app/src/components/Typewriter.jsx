import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Typewriter() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hey there!', 'Bonjour!', 'Guten Tag!', 'Buongiorno!', 'How ya goin mate?', 'Welcome to my portfolio ^800 ☀️'],
      typeSpeed: 130,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}