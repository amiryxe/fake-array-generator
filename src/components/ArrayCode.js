import React, { useContext } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import MainContext from '../context/mainContext';

const sss = `
[
    {
        id: 0,
        title: 'salam'
    },
    {
        id: 0,
        title: 'salam'
    },
    {
        id: 0,
        title: 'salam'
    },
]
`;

const ArrayCode = () => {
  const { arrayLength } = useContext(MainContext);

  const generateArray = () => {
    let str = '';
    for (let i = 0; i < arrayLength; i++) {
      str += `{ 
        title: 'salam'
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
