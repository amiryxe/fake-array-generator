import React, { useContext, useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MainContext from '../context/mainContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ArrayCode = () => {
  const { arrayLength, autoID, keyValInputs } = useContext(MainContext);

  const [result, setResult] = useState('');
  const [keyVals, setKeyVals] = useState(null);

  useEffect(() => {
    // let arr = [...keyVals];

    // arr.push(keyValInputs.map((item, index) => ({
    //   [item.key]: item.value,
    // })))

    const newObj = {
      ...keyVals
    }

    keyValInputs.map((item, index) => {


      newObj[item.key] = item.value


      setKeyVals(newObj)
    })

    // setKeyVals(arr);
    // console.log(arr)

    // for (let i = 0; i < arrayLength; i++) {
    //   arr.push({
    //     id: autoID ? Math.random() : i,
    //     vals
    //   });
    // }

    console.log(keyVals)


    // setResult(JSON.stringify(arr, null, 2));
  }, [keyValInputs]);


  return (
    <div className='code-area'>
      <SyntaxHighlighter language='javascript' style={a11yDark}>
        {result}
      </SyntaxHighlighter>

      <CopyToClipboard text={result}>
        <span className='copy-btn' role='img' aria-label='copy'>
          📄
        </span>
      </CopyToClipboard>
    </div>
  );
};

export default ArrayCode;
