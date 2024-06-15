'use client';

import React from 'react';
import { Typewriter } from 'nextjs-simple-typewriter';

const CodeTyped = () => {
  return (
    <div className="App">
      <h1>
        I AM.. &#60;
        <span className="cgreen">
          D
          <Typewriter
            words={['eveloper', 'esigner']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </span>
        &#62;
      </h1>
    </div>
  );
};

export default CodeTyped;
