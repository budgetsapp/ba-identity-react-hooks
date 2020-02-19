import { DefaultUser } from '../consts/user';

export function buildUser(displayName) {
  return {
    displayName,
  };
}

export function buildCurrentUser(data) {
  return buildUser(data ? data.display_name : '');
}

export function buildDefaultUser() {
  return buildUser(DefaultUser.displayName);
}
