import { call, put, select, takeLatest } from 'redux-saga/effects';

import { CATEGORY_ACTIONS, categoryActions } from '../reducers/category';
import categoryApi from '../api/category';

function* create({ value }) {
  try {
    const { category } = yield select();
    const formData = new FormData();

    formData.append('file', value.file);

    const { data } = yield call(categoryApi.create, {
      name: value.name,
      desc: value.desc,
      formData
    });
    if (data) {
      const categories = [...category.data, value];
      yield put(categoryActions.createResponse({ message: data.message, categories }));
    }
  } catch (error) {
    if (error.response) {
      yield put(categoryActions.createError({ message: error.response.data.message }));
    } else {
      yield put(categoryActions.createError({ message: error }));
    }
  }
}

const categorySaga = [takeLatest(CATEGORY_ACTIONS.CREATE_REQUEST, create)];

export default categorySaga;
