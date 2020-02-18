export function buildUser(displayName) {
  return {
    displayName,
  };
}

export function buildCurrentUser(data) {
  return buildUser(data ? data.display_name : '');
}

export function buildDefaultUser() {
  return buildUser('User');
}
