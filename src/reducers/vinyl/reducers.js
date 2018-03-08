import types from './types';

// Reducer
const vinylReducer = (vinyl = [], action) => {
  const { type, payload } = action;

  console.debug('ACTION >>> ', type);

  switch (type) {
    case types.GET_VINYLS_SUCCESS: {
      // console.debug(1);
      // console.debug(payload.data);
      return payload.data;
    }
    case types.GET_VINYL_SUCCESS: {
      // console.debug('2');
      return payload.data[0];
    }
    default: {
      // console.debug('3');
      return vinyl;
    }
  }
};

export default {
  vinyl: vinylReducer,
};
