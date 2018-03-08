import types from './types';

// Reducer
const navigationReducer = (navigation = {}, action) => {
  const { type } = action;

  switch (type) {
    case types.GO_LIBRARY: {
      return {
        page: 'library',
      };
    }
    default:
      return navigation;
  }
};

export default {
  navigation: navigationReducer,
};
