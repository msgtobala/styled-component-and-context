import React, { useState } from 'react';

import { StyledPTag, StyledCounterPTag } from './StyledComponent.styled';

const StyledComponent = (props) => {
  console.log(props.children);
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <StyledPTag>Hello World</StyledPTag>
      <StyledCounterPTag counter="red">{counter}</StyledCounterPTag>
      <button type="button" onClick={incCounter}>
        Increment
      </button>
      {props.children}
    </>
  );
};

export default StyledComponent;
