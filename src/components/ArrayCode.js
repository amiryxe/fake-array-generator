import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
  return (
    <SyntaxHighlighter language='javascript' style={a11yDark}>
      {sss}
    </SyntaxHighlighter>
  );
};

export default ArrayCode;
