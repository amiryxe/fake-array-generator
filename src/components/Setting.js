import React, { useContext, useState } from 'react';
import MainContext from '../context/mainContext';
import Record from './Record';

const Setting = () => {
  const {
    arrayLength,
    setArrayLength,
  } = useContext(MainContext);


  const [recordList, setRecordList] = useState([<Record />]);

  const [idTypeStatus, setIdTypeStatus] = useState('auto');

  const addRecord = () => {
    const tempRecordList = [...recordList];
    tempRecordList.push(<Record />)
    setRecordList(tempRecordList);
  }

  const renderRecords = () => {
    return recordList.map((record, index) => <Record key={index} index={index} />)
  }

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
        {renderRecords()}
      </ul>
      <button className='add-another' onClick={addRecord}>
        + Add another?
      </button>
    </div>
  );
};

export default Setting;
