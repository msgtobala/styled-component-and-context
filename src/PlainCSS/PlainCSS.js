import React, { useState } from 'react';

import CompA from './CompA/CompA';
import CompB from './CompB/CompB';
import './PlainCSS.css';

const PlainCSS = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>PlainCSS</h1>
      <CompA />
      <CompB />
      <p className={['bold'].join('')}>{counter}</p>
      <button type="button" onClick={incrementCounter}>
        Increment
      </button>
    </div>
  );
};

export default PlainCSS;
