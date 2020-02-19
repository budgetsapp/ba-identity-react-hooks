import React from 'react';
import BaAuthApiClient from 'ba-auth-api-client';
import { BaIdentityProvider } from '../src';

import { storage } from './helpers/storage';

localStorage.setItem('debug', 'Auth-API');

export function App({ children }) {
  const authClient = new BaAuthApiClient({
    serverUrl: process.env.REACT_APP_IDENTITY_URL, // TODO: use mocks
    storage: storage,
    refreshInterval_MS: 5000, // 5 sec
  });

  return (
    <BaIdentityProvider client={authClient}>{children}</BaIdentityProvider>
  );
}
