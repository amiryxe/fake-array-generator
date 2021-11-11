import React from 'react';
import Setting from './components/Setting';
import ArrayCode from './components/ArrayCode';
import MainState from './context/MainState';
import Header from './components/Header';
import 'typeface-comfortaa';
import './App.css';

function App() {
  return (
    <div className='container'>
      <MainState>
        <div className='section'>
          <Header />
          <Setting />
        </div>
        <div className='section'>
          <ArrayCode />
        </div>
      </MainState>
    </div>
  );
}

export default App;
