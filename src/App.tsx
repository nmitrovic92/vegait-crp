import React, { Suspense } from 'react';
import { useVisible } from './hooks/useVisible';
import { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
const RocketLoader = React.lazy(() => import('./components/RocketLoader/RocketLoader'));

function App() {
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(sectionTwoRef);
  console.log('SECTION 2 isVisible state', isVisible);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <header ref={sectionTwoRef} className="App-header" style={{ backgroundColor: 'whitesmoke' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        {isVisible && <RocketLoader />}
      </Suspense>
    </div>
  );
}

export default App;
