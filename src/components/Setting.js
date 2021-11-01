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
        errorKey: false,
      },
    ]);
  };

  const keyValArrayHandler = (e) => {
    const updatedArray = [...keyValInputs];
    updatedArray[e.target.dataset.idx - 1][e.target.name] = e.target.value;

    if (e.target.name === 'key') {
      if (
        /^[0-9$-/:-?{-~!"^_`[\]]+$/.test(
          updatedArray[e.target.dataset.idx - 1][e.target.name][0]
        )
      ) {
        updatedArray[e.target.dataset.idx - 1].errorKey = true;
      } else {
        updatedArray[e.target.dataset.idx - 1].errorKey = false;
      }
    }

    setKeyValInputs(updatedArray);
  };

  const [showDeleteButton, setShowDeleteButton] = useState(true);

  const [idTypeStatus, setIdTypeStatus] = useState('auto');

  useEffect(() => {
    if (keyValInputs.length > 1) {
      setShowDeleteButton(true);
    } else {
      setShowDeleteButton(false);
    }
  }, [keyValInputs]);

  const deleteItemHandler = (index) => {
    if (keyValInputs.length > 1) {
      const updatedArray = [...keyValInputs];
      updatedArray.splice(index, 1);
      setKeyValInputs(updatedArray);
    }
  };

  return (
    <div>
      <h1>Fake Array Generator</h1>
      <br />
      <h2>Setting:</h2>
      <label>
        <p>Count of items in array:</p>
        <input
          type='text'
          placeholder='Length of Array'
          value={arrayLength}
          onChange={(e) =>
            e.target.value <= 200 && setArrayLength(Number(e.target.value))
          }
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

      <div>
        <label htmlFor="auto_id">
          <input type="radio" name="id-type" id="auto_id"
            onChange={() => setIdTypeStatus('auto')} checked={idTypeStatus === 'auto'} />
          Auto ID
        </label>

        <label htmlFor="random_id">
          <input type="radio" name="id-type" id="random_id"
            onChange={() => setIdTypeStatus('rand')} checked={idTypeStatus === 'rand'} />
          Random ID
        </label>
      </div>

      <hr />

      <ul>
        {keyValInputs.map((item, index) => (
          <li key={item.id}>
            <input
              type='text'
              placeholder='Key'
              name='key'
              data-idx={item.id}
              value={keyValInputs[index].key}
              onChange={keyValArrayHandler}
              style={{ color: item.errorKey && 'red' }}
            />
            <input
              type='text'
              name='value'
              data-idx={item.id}
              placeholder='Value'
              value={keyValInputs[index].value}
              onChange={keyValArrayHandler}
            />
            {showDeleteButton && (
              <button
                className='delete-btn'
                onClick={() => deleteItemHandler(index)}
              >
                ×
              </button>
            )}
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
