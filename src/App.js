import Setting from './components/Setting';
import ArrayCode from './components/ArrayCode';
import MainState from './context/MainState';
import Header from './components/Header';
import 'typeface-comfortaa';
import './App.scss';
import store from './store';
import { StoreProvider } from 'easy-peasy';

function App() {
  return (
    <StoreProvider store={store}>
      <div className='container'>
        <MainState>
          <div className='section'>
            <Header />
            <Setting />
          </div>
          <div className='section'>
            <ArrayCode />
          </div>
        </MainState>
      </div>
    </StoreProvider>
  );
}

export default App;
