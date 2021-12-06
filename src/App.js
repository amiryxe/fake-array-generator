import Setting from './components/Setting';
import Result from './components/Result';
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
          <Result />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
