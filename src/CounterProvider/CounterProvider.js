import { createContext, useContext, useState } from 'react';

export const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const AppProvider = (props) => {
  const { children } = props;

  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    console.log('Incrementing...');
    setCounter(counter + 1);
  };

  const value = {
    counter,
    incCounter,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
