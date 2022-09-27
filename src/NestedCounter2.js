import React from 'react';

import { useAppContext } from './CounterProvider/CounterProvider';

const NestedComp2 = () => {
  const { counter, incCounter } = useAppContext();
  
  return (
    <>
      <p>{counter}</p>
      <button type='button' onClick={incCounter}>Increment</button>
    </>
  );
};

export default NestedComp2;
