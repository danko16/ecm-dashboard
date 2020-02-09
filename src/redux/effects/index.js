import { all } from 'redux-saga/effects';

import meSaga from './me';
import categorySaga from './category';

export default function* rootSaga() {
  yield all([...meSaga, ...categorySaga]);
}
