import types from './types';

const INITIAL_STATE = {
  username: '',
  password: '',
  error: null,
};

// Reducer
const selfReducer = (self = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SIGNIN: {
      return payload.data;
    }
    default:
      return self;
  }
};

export default {
  self: selfReducer,
};
