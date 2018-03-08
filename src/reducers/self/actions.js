import * as creators from './creators';

export const signIn = ({ username, password}) => (
  dispatch => dispatch(creators.signIn(username, password))
);
