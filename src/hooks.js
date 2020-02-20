import { useContext } from 'react';
import { BaIdentityClientContext } from './context';

export function useIdentity() {
  const {
    login,
    logout,
    autoUpdateToken,
    getIsAuthenticated,
    getIsRefreshTokenExpired,
  } = useContext(BaIdentityClientContext);
  return {
    login,
    logout,
    autoUpdateToken,
    getIsRefreshTokenExpired,
    getIsAuthenticated,
  };
}

export function useCurrentUser() {
  const { user } = useContext(BaIdentityClientContext);
  return user;
}

export function useBaIdentityClient() {
  return new Error('Not implemented');
}
