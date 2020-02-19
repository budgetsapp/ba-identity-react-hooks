import { useContext } from 'react';
import { AuthClientContext } from './context';

export function useIdentity() {
  const {
    login,
    logout,
    autoUpdateToken,
    getIsAuthenticated,
    getIsRefreshTokenExpired,
  } = useContext(AuthClientContext);
  return {
    login,
    logout,
    autoUpdateToken,
    getIsRefreshTokenExpired,
    getIsAuthenticated,
  };
}

export function useCurrentUser() {
  const { user } = useContext(AuthClientContext);
  return user;
}

export function useBaIdentityClient() {
  return new Error('Not implemented');
}
