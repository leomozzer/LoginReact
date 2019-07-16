import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import AppRoutes from './Components/Routes';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className='App-header'>
          <AppRoutes/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
