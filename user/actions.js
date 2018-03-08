import * as creators from './creators';

export const signIn = ({ email, password }) => ( // eslint-disable-line
  dispatch => dispatch(creators.signIn({ email, password }))
);
