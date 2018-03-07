import types from './types';

// Reducer
const vinylReducer = (vinyl = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_VINYLS_SUCCESS: {
      return [
        {
          name: 'My first vinyl',
        },
        {
          name: 'My second vinyl',
        },
      ];
    }
    case types.GET_VINYL_SUCCESS: {
        return {
            name: 'My first vinyl',
        };
      }
    default:
      return vinyl;
  }
};

export default {
  vinyl: vinylReducer,
};
