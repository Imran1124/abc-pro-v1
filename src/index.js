import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/app/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Loader from './Components/Loader';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
