import { isEmpty } from 'lodash';
import types from './types';
import initialState from './initialState';

// Reducer
const userReducer = (user = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SIGNIN_SUCCESS: {
      const dataUser = payload.data[0];
      const userExist = !isEmpty(dataUser);
      console.debug(Object.assign({}, user, { login: userExist }));
      return Object.assign({}, user, { login: userExist });
    }
    default:
      return user;
  }
};

export default {
  user: userReducer,
};
