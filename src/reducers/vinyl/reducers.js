import types from './types';

// Reducer
const vinylReducer = (vinyl = [], action) => {
  const { type, payload } = action;

  switch (type) {
    //bcase types.GET_VINYLS_SUCCESS: {
    case types.GET_VINYLS: {
      return [
        {
          name: 'My first vinyl',
        },
        {
          name: 'My second vinyl',
        },
        {
          name: 'Sergi is the QA boss!',
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
