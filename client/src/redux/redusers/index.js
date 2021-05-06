import { combineReducers } from 'redux';

import regExp from './regExp';
import categories from './categories';
import create from './create';
import auth from './auth';

const rootReducer = combineReducers({
  categories,
  regExp,
  create,
  auth,
})

export default rootReducer;