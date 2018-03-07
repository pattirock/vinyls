import types from './types';

export const getVinyls = () => ({
  type: types.GET_VINYLS,
//   payload: {
//     request: {
//       url: '',
//     },
//   },
});

export const getVinyl = (vinylId) => ({
  type: types.GET_VINYL,
  //   payload: {
  //     request: {
  //       url: '',
  //     },
  //   },
});
