import React, { useContext } from 'react';
import MainContext from '../context/mainContext';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

const Setting = () => {
  const {
    arrayLength,
    setArrayLength,
    autoID,
    setAutoID,
    randomId,
    setRandomID,
  } = useContext(MainContext);

  const changeIdHandler = (name) => {
    if (name === 'autoID') {
      setAutoID(true);
      setRandomID(false);
    } else {
      setRandomID(true);
      setAutoID(false);
    }
  };

  return (
    <div>
      <h2>Setting:</h2>
      <label>
        <p>Count of items in array:</p>
        <input
          type='text'
          placeholder='Length of Array'
          value={arrayLength}
          onChange={(e) => setArrayLength(Number(e.target.value))}
        />
      </label>

      <label>
        <Checkbox
          name='autoID'
          checked={autoID}
          onChange={(e) => changeIdHandler(e.target.name)}
        />
        Auto ID
      </label>
      <label>
        <Checkbox
          name='randomID'
          checked={randomId}
          onChange={(e) => changeIdHandler(e.target.name)}
        />
        Random ID
      </label>
    </div>
  );
};

export default Setting;
