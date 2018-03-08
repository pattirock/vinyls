import types from './types';

export const signIn = userData => ({ // eslint-disable-line
  type: types.SIGNIN,
  payload: {
    request: {
      url: `http://localhost:3000/users?email_like=${userData.email}&password_like=${userData.password}`,
    },
  },
});
