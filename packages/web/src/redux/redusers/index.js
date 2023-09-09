import { combineReducers } from 'redux';

import regExp from './regExp';
import categories from './categories';
import create from './create';
import account from './account';

const rootReducer = combineReducers({
  categories,
  regExp,
  create,
  account,
})

export default rootReducer;