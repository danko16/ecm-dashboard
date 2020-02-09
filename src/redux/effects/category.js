import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { CATEGORY_ACTIONS, categoryActions } from '../reducers/category';
import categoryApi from '../api/category';

function* create({ value }) {
  try {
    const formData = new FormData();

    formData.append('name', value.name);
    formData.append('file', value.file);

    const {
      data: { data }
    } = yield call(categoryApi.create, formData);

    if (data) {
      console.log(data);
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

const meSaga = [takeLatest(CATEGORY_ACTIONS.CREATE_REQUEST, create)];

export default meSaga;
