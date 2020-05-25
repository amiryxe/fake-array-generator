import React, { useContext } from 'react';
import MainContext from '../context/mainContext';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

const Setting = () => {
  const { arrayLength, setArrayLength } = useContext(MainContext);

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
      Type of elements:
      <ul>
        <li>
          <label>
            <Checkbox />
            Object
          </label>
        </li>
        <li>
          <label>
            <Checkbox />
            String
          </label>
        </li>
        <li>
          <label>
            <Checkbox />
            Number
          </label>
        </li>
      </ul>
      <label>
        <Checkbox />
        Auto ID
      </label>
      <label>
        <Checkbox />
        Random ID
      </label>
    </div>
  );
};

export default Setting;
