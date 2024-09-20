import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Persistor, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.tsx';
import { I18nProvider } from './components/i18n/Languague18n.tsx';

import './components/assets/sass/style.react.scss';
import './components/assets/fonticon/fonticon.css';
import './components/assets/keenicons/duotone/style.css';
import './components/assets/keenicons/outline/style.css';
import './components/assets/keenicons/solid/style.css';
import './components/assets/sass/style.scss';


import { store } from './store/store.ts';



const persistor: Persistor = persistStore(store);

// init({
//   serviceName: 'Jobber Client App',
//   serverUrl: import.meta.env.VITE_ELASTIC_APM_SERVER,
//   serviceVersion: '0.0.1',
//   active: true
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <I18nProvider>
        <App />

        </I18nProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
