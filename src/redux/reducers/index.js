import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import me from './me';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    me
  });

export default createRootReducer;
