import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducers as vinylReducer } from '../reducers/vinyl';
import { reducers as userReducer } from '../reducers/user';
import { reducers as navigationReducer } from '../reducers/navigation';

const rootReducer = combineReducers(Object.assign(
  {},
  { form: formReducer },
  navigationReducer,
  userReducer,
  vinylReducer,
));

export default rootReducer;
