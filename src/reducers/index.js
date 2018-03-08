import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducers as vinylReducer } from '../reducers/vinyl';
import { reducers as selfReducer } from '../reducers/self';

const rootReducer = combineReducers(Object.assign({},
  { form: formReducer },
  vinylReducer,
  selfReducer,
));

export default rootReducer;