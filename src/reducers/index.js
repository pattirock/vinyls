import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import { reducers as vinylReducer } from '../reducers/vinyl';

const rootReducer = combineReducers(Object.assign({},
//   { form: formReducer },
  vinylReducer,
));

export default rootReducer;