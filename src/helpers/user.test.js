import { DefaultUser } from '../consts/user';
import { buildUser, buildCurrentUser, buildDefaultUser } from './user';

const userData = {
  displayName: 'display_name',
};

describe('buildUser', () => {
  test('should return user', () => {
    const user = buildUser(userData.displayName);
    expect(user).toEqual(userData);
  });
});

describe('buildCurrentUser', () => {
  test('should return user', () => {
    const userDataResponse = {
      display_name: 'display_name',
    };
    const user = buildCurrentUser(userDataResponse);
    expect(user).toEqual(userData);
  });
});

describe('buildDefaultUser', () => {
  test('should return user', () => {
    const defaultUser = {
      displayName: DefaultUser.displayName,
    };
    const user = buildDefaultUser();
    expect(user).toEqual(defaultUser);
  });
});
