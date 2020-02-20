import React from 'react';
import BaIdentityClient from 'ba-identity-client-js';
import { BaIdentityProvider } from '../src';

import { storage } from './helpers/storage';

localStorage.setItem('debug', 'BaIdentityClientJs');

export function App({ children }) {
  const identityClient = new BaIdentityClient({
    serverUrl: process.env.REACT_APP_IDENTITY_URL, // TODO: use mocks
    storage: storage,
    refreshInterval_MS: 5000, // 5 sec
  });

  return (
    <BaIdentityProvider client={identityClient}>{children}</BaIdentityProvider>
  );
}
