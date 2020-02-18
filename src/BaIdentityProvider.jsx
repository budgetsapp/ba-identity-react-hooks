import React, { useEffect } from 'react';
import { useState } from 'react';

import { AuthClientContext } from './context';
import { buildDefaultUser, buildCurrentUser } from './helpers/user';

export function BaIdentityProvider({ client, children }) {
  const [user, setUser] = useState(buildDefaultUser());
  const [refreshToken, setRefreshToken] = useState(undefined); // undefined means that value is not set yet
  const [isRefreshTokenExpired, setIsRefreshTokenExpired] = useState(undefined);
  useEffect(() => {
    if (refreshToken) {
      const isExpired = client.isRefreshTokenExpired(refreshToken);
      setIsRefreshTokenExpired(isExpired);
    }
  }, [client, refreshToken]);

  client.setTokensUpdatedCallback(({ refreshToken, accessToken, data }) => {
    setRefreshToken(refreshToken);
    const currentUser = accessToken
      ? buildCurrentUser(data)
      : buildDefaultUser();
    setUser(currentUser);
  });

  useEffect(() => {
    client.autoUpdateToken(true);
  }, [client]);

  const value = {
    user,
    login: async function(login, password) {
      await client.login(login, password);
      client.autoUpdateToken();
    },
    logout: function() {
      client.logout();
    },
    autoUpdateToken: function() {
      client.autoUpdateToken();
    },
    /**
     * Intended to allow open an app if there is a refresh token
     * Can be used for offline mode
     */
    getIsRefreshTokenExpired: function() {
      return (
        refreshToken !== undefined &&
        (refreshToken === null || isRefreshTokenExpired)
      );
    },
    getIsAuthenticated: function() {
      return refreshToken !== null && refreshToken !== undefined;
    },
  };

  return (
    <AuthClientContext.Provider value={value}>
      {children}
    </AuthClientContext.Provider>
  );
}
