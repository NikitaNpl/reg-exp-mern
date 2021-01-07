import { combineReducers } from 'redux';

import regExp from './regExp';
import categories from './categories';

const rootReducer = combineReducers({
  categories,
  regExp,
})

export default rootReducer;