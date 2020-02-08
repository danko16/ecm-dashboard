import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import rootReducers from './reducers';
import rootSagas from './effects';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['me'],
  blacklist: [],
  transforms: []
};

export const history = createBrowserHistory();

const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare, thunkMiddleware, routerMiddleware(history)].filter(x => !!x);

const persistReducers = persistReducer(persistConfig, rootReducers(history));

export const store = createStore(persistReducers, compose(applyMiddleware(...middleware)));
export const persistor = persistStore(store);

sagaMiddleWare.run(rootSagas);
