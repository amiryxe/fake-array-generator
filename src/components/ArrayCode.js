import React, { useContext } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MainContext from '../context/mainContext';

const ArrayCode = () => {
  const { arrayLength, autoID, keyValInputs } = useContext(MainContext);

  const generateArray = () => {
    let str = '';
    for (let i = 0; i < arrayLength; i++) {
      str += `{ 
    id: ${autoID ? i + 1 : String(Math.random()).split('.')[1]},
    ${
      keyValInputs.length > 0
        ? keyValInputs
            .map((item) =>
              item.key
                ? `${item.key}: ${
                    item.value > 0 ? item.value : `"${item.value}",`
                  }`
                : ''
            )
            .join('\n    ')
        : ''
    }
  },
  `;
    }

    return `[
  ${str}
]`;
  };

  return (
    <SyntaxHighlighter language='javascript' style={a11yDark}>
      {generateArray()}
    </SyntaxHighlighter>
  );
};

export default ArrayCode;