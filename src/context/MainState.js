import React, { useState } from 'react';
import MainContext from './mainContext';

const MainState = (props) => {
  const [arrayLength, setArrayLength] = useState(5);

  return (
    <MainContext.Provider
      value={{
        arrayLength,
        setArrayLength,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
