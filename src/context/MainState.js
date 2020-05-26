import React, { useState } from 'react';
import MainContext from './mainContext';

const MainState = (props) => {
  const [arrayLength, setArrayLength] = useState(1);
  const [mainString, setMainString] = useState('');
  const [autoID, setAutoID] = useState(true);
  const [randomId, setRandomID] = useState(false);

  return (
    <MainContext.Provider
      value={{
        arrayLength,
        setArrayLength,

        mainString,
        setMainString,

        autoID,
        setAutoID,

        randomId,
        setRandomID,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
