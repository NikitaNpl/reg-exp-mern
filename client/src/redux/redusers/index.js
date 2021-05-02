import { combineReducers } from 'redux';

import regExp from './regExp';
import categories from './categories';
import create from './create';

const rootReducer = combineReducers({
  categories,
  regExp,
  create,
})

export default rootReducer;