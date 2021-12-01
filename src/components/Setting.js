import { useContext, useState } from 'react';
import MainContext from '../context/mainContext';
import Record from './Record';
import { useStoreActions, useStoreState } from 'easy-peasy';

const Setting = () => {
  const [recordList, setRecordList] = useState([<Record />]);
  const [idTypeStatus, setIdTypeStatus] = useState('auto');

  const count = useStoreState(state => state.count);
  const records = useStoreState((state) => state.records);
  const lastPropID = records[records.length - 1].id;

  const addProp = useStoreActions((actions) => actions.addProp);
  const setCount = useStoreActions((actions) => actions.setCount);

  const addAnother = () => {
    addProp({
      id: lastPropID + 1,
      key: '',
      value: ''
    })
  }

  return (
    <>
      <h2>Setting:</h2>
      <label>
        <p>Count of items in array:</p>
        <input
          type='text'
          placeholder='Length of Array'
          value={count}
          onChange={(e) =>
            e.target.value <= 200 && setCount(Number(e.target.value))
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
        {records.map(item => (
          <Record key={item.id} index={item.id} />
        ))}
      </ul>
      <button className='add-another' onClick={addAnother}>
        + Add another?
      </button>
    </>
  );
};

export default Setting;
