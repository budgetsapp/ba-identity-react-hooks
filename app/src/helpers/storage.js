const _storage = {};

export const storage = {
  getItem: async key => {
    return new Promise(function(resolve) {
      resolve(_storage[key]);
    });
  },
  setItem: async (key, value) => {
    return new Promise(function(resolve) {
      _storage[key] = value;
      resolve();
    });
    // console.log('Storage', _storage);
  },
  removeItem: key => {
    return new Promise(function(resolve) {
      delete _storage[key];
      resolve();
    });
    // console.log('Storage', _storage);
  },
};
