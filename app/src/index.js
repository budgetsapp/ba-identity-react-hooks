import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { storage } from './helpers/storage';
import BaAuthApiClient from 'ba-auth-api-client';
import { BaIdentityProvider } from './lib';

const authClient = new BaAuthApiClient({
  serverUrl: process.env.REACT_APP_IDENTITY_URL, // TODO: use mocks
  storage: storage,
  refreshInterval_MS: 5000, // 5 sec
});

function Root() {
  return (
    <BaIdentityProvider client={authClient}>
      <App />
    </BaIdentityProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
