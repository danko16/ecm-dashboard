import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { ME_ACTIONS, meActions } from '../reducers/me';
import authApi from '../api/auth';

function* login({ value }) {
  try {
    const payload = {
      data: {
        email_phone: value.email_phone,
        password: value.password,
        provider: value.provider,
        client_id: 'dashboard'
      }
    };

    const {
      data: { data }
    } = yield call(authApi.login, payload);

    if (data) {
      console.log(data);
      yield put(meActions.setData(data));
      yield put(push('/'));
    }
  } catch (error) {
    console.log(error);
  }
}

function* register({ value }) {
  try {
    const payload = {
      full_name: value.full_name,
      password: value.password,
      email: value.email,
      phone: value.phone,
      provider: value.provider,
      client_id: 'dashboard'
    };
    const {
      data: { data }
    } = yield call(authApi.register, payload);

    if (data) {
      yield put(meActions.setData(data));
    }
  } catch (error) {
    console.log(error);
  }
}

const meSaga = [
  takeLatest(ME_ACTIONS.LOGIN_REQUEST, login),
  takeLatest(ME_ACTIONS.REGISTER_REQUEST, register)
];

export default meSaga;
