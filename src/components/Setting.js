import React, { useContext, useState, useEffect } from 'react';
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
    keyValInputs,
    setKeyValInputs,
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

  const addKeyValInput = () => {
    setKeyValInputs([
      ...keyValInputs,
      {
        id: keyValInputs[keyValInputs.length - 1].id + 1,
        key: '',
        value: '',
      },
    ]);
  };

  const keyValArrayHandler = (e) => {
    const updatedArray = [...keyValInputs];
    updatedArray[e.target.dataset.idx - 1][e.target.name] = e.target.value;
    setKeyValInputs(updatedArray);
  };

  return (
    <div>
      <h1>Fake Array Generator</h1>
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
      <hr />

      <ul>
        {keyValInputs.map((item) => (
          <li key={item.id}>
            <input
              type='text'
              placeholder='Key'
              name='key'
              data-idx={item.id}
              value={keyValInputs[item.id - 1].key}
              onChange={keyValArrayHandler}
            />
            <input
              type='text'
              name='value'
              data-idx={item.id}
              placeholder='Value'
              value={keyValInputs[item.id - 1].value}
              onChange={keyValArrayHandler}
            />
          </li>
        ))}
      </ul>
      <button className='add-another' onClick={addKeyValInput}>
        + Add another?
      </button>
    </div>
  );
};

export default Setting;
