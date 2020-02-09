import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import me from './me';
import category from './category';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    me,
    category
  });

export default createRootReducer;
