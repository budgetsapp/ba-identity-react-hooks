import React from 'react';
import './App.css';

import { useBaIdentityClient, useCurrentUser, useIdentity } from './lib';

localStorage.setItem('debug', 'Auth-API');

function buildLog(func) {
  return function(status, e) {
    const _e = e ? `: ${e}` : '';
    const _status = status ? `: ${status}` : '';
    const log = `${func} ${_status} ${_e}`;
    console.log(log);
  };
}

function App() {
  const {
    autoUpdateToken,
    getIsAuthenticated,
    getIsRefreshTokenExpired,
    login,
    logout,
  } = useIdentity();

  function _login() {
    const log = buildLog('login');
    log();
    const DEFAULT_LOGIN = 'ba-user-1';
    const DEFAULT_PASSWORD = 'ba-password';
    login(DEFAULT_LOGIN, DEFAULT_PASSWORD)
      .then(() => {
        log('success');
      })
      .catch(e => log('error', e));
  }

  function _autoUpdateToken() {
    console.log('autoUpdateToken');
    autoUpdateToken();
  }

  function _logout() {
    console.log('logout');
    logout();
  }

  const currentUser = useCurrentUser();

  return (
    <div>
      <h1>Demo app</h1>
      <div className="statuses-container">
        <span>Status</span>
        <span>{`getIsAuthenticated: ${getIsAuthenticated()}`}</span>
        <span>{`getIsRefreshTokenExpired: ${getIsRefreshTokenExpired()}`}</span>
        <span>{`currentUser: ${JSON.stringify(currentUser, null, 2)}`}</span>
      </div>
      <div className="controls-container">
        <button onClick={() => _login()}>login</button>
        <button onClick={() => _autoUpdateToken()}>autoUpdateToken</button>
        <button onClick={() => _logout()}>logout</button>
      </div>
    </div>
  );
}

export default App;
