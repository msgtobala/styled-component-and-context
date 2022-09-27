import React from 'react';

import NestedComp2 from './NestedCounter2';

const NestedComp1 = (props) => {
  const { counter, incCounter } = props;

  return <NestedComp2 counter={counter} incCounter={incCounter} />;
};

export default NestedComp1;
