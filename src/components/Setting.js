import React, { useContext, useState } from 'react';
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
    keyVal,
    setKeyVal,
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

  const [keyValInputs, setKeyValInputs] = useState([
    {
      id: 1,
      key: 'Title',
      value: 'Book',
    },
  ]);

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
            <input type='text' placeholder='Key' defaultValue={item.key} />
            <input type='text' placeholder='Value' defaultValue={item.value} />
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
