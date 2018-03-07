import * as creators from './creators';

// export const vinylSetData = slotData => (
//   (dispatch) => {
//     dispatch(creators.slotSetData(slotData));
//   }
// );

export const getVinyls = () => (
  dispatch => dispatch(creators.getVinyls())
);

export const getVinyl = ({ vinylId}) => (
    dispatch => dispatch(creators.getVinyl(vinylId))
  );