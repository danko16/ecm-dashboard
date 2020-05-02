import { call, put, select, takeLatest } from 'redux-saga/effects';

import { CATEGORY_ACTIONS, categoryActions } from '../reducers/category';
import categoryApi from '../api/category';

function* get() {
  try {
    const {
      data: { message, data }
    } = yield call(categoryApi.get);
    if (data) {
      yield put(categoryActions.getResponse({ categories: data, message: message }));
    }
  } catch (error) {
    if (error.response) {
      yield put(categoryActions.error({ message: error.response.data.message }));
    } else {
      yield put(categoryActions.error({ message: error }));
    }
  }
}

function* deleteCategory({ value }) {
  try {
    const { category } = yield select();
    const {
      data: { message }
    } = yield call(categoryApi.deleteCategory, { id: value });
    if (message) {
      let data = category.data.filter(category => category.id !== value);
      yield put(categoryActions.deleteResponse({ categories: data, message }));
    }
  } catch (error) {
    if (error.response) {
      yield put(categoryActions.error({ message: error.response.data.message }));
    } else {
      yield put(categoryActions.error({ message: error }));
    }
  }
}

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
      yield put(categoryActions.error({ message: error.response.data.message }));
    } else {
      yield put(categoryActions.error({ message: error }));
    }
  }
}

const categorySaga = [
  takeLatest(CATEGORY_ACTIONS.CREATE_REQUEST, create),
  takeLatest(CATEGORY_ACTIONS.GET_REQUEST, get),
  takeLatest(CATEGORY_ACTIONS.DELETE_REQUEST, deleteCategory)
];

export default categorySaga;
