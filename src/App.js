import Setting from './components/Setting';
import ArrayCode from './components/ArrayCode';
import Header from './components/Header';
import 'typeface-comfortaa';
import './App.scss';
import store from './store';
import { StoreProvider } from 'easy-peasy';

function App() {
  return (
    <StoreProvider store={store}>
      <div className='container'>
        <div className='section'>
          <Header />
          <Setting />
        </div>
        <div className='section'>
          <ArrayCode />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
