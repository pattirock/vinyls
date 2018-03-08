import { types as navigationActions } from '../reducers/navigation';

// const navigationMiddleware = store => next => (action) => {
const navigationMiddleware = () => next => (action) => {
  // const state = store.getState();

  switch (action.type) {
    case navigationActions.GO_LIBRARY: {
      document.location.href = 'http://localhost:3003/library';
      break;
    }
    default:
      break;
  }

  return next(action);
};

export default navigationMiddleware;
