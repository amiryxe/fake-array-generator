import React, { useContext, useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MainContext from '../context/mainContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ArrayCode = () => {
  const { arrayLength, keyValInputs } = useContext(MainContext);

  const [result, setResult] = useState('');

  useEffect(() => {
    const newObj = {}

    keyValInputs.map((item) => {
      newObj[item.key] = item.value.length > 1 && !isNaN(item.value) ? Number(item.value) : item.value
    })

    const arr = []
    for (let i = 0; i < arrayLength; i++) {
      arr.push({
        id: keyValInputs && keyValInputs[i].id,
        ...newObj
      });
    }

    setResult([...arr]);
  }, [keyValInputs, arrayLength]);

  return (
    <div className='code-area'>
      <SyntaxHighlighter language='javascript' style={a11yDark}>
        {JSON.stringify(result, null, 2)}
      </SyntaxHighlighter>

      <CopyToClipboard text={JSON.stringify(result, null, 2)}>
        <span className='copy-btn' role='img' aria-label='copy'>
          📄
        </span>
      </CopyToClipboard>
    </div>
  );
};

export default ArrayCode;
