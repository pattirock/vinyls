import * as creators from './creators';

export const getVinyls = () => (
  dispatch => dispatch(creators.getVinyls())
);

export const getVinyl = ({ vinylId}) => (
    dispatch => dispatch(creators.getVinyl(vinylId))
  );