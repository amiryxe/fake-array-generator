import React from 'react';
import Setting from './components/Setting';
import ArrayCode from './components/ArrayCode';
import MainState from './context/MainState';
import './App.css';

function App() {
  return (
    <div className='container'>
      <MainState>
        <div>
          <Setting />
        </div>
        <div>
          <ArrayCode />
        </div>
      </MainState>
    </div>
  );
}

export default App;
