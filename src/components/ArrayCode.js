import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useStoreState } from 'easy-peasy';


const ArrayCode = () => {
  const record = useStoreState((state) => state.record);
  const count = useStoreState(state => state.count);

  const renderResult = () => {
    const arr = [];

    for (let i = 0; i < count; i++) {
      arr.push(record);
    }

    return arr;
  }

  return (
    <div className='code-area'>
      <SyntaxHighlighter language='javascript' style={a11yDark}>
        {JSON.stringify(renderResult(), null, 2)}
      </SyntaxHighlighter>

      <CopyToClipboard text={JSON.stringify(renderResult(), null, 2)}>
        <span className='copy-btn' role='img' aria-label='copy'>
          📄
        </span>
      </CopyToClipboard>
    </div>
  );
};

export default ArrayCode;
