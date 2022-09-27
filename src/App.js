import { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import CSSModules from './CSSModules/CSSModules';
import PlainCSS from './PlainCSS/PlainCSS';
import StyledComponent from './StyledComponents/StyledComponent';
import { GlobalStyle1 } from './GlobalStyles';
import { globalThemes } from './Themes/GlobalThemes';
import NestedComp1 from './NestedComp1';
import AppProvider from './CounterProvider/CounterProvider';

function App() {
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <ThemeProvider theme={globalThemes}>
      <AppProvider>
        <div style={{ padding: '20px 40px' }}>
          <GlobalStyle1 />
          <PlainCSS />
          <CSSModules />
          <StyledComponent>
            <p>This is a child nested component</p>
          </StyledComponent>
          <p>This is salmon color</p>
          <NestedComp1 counter={counter} incCounter={incCounter} />
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
