import './config/ReactotronConfig';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={2000} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
