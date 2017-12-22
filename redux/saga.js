/* global fetch */

import {delay} from 'redux-saga'
import {all, call, put, take, takeEvery, select} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { Types, Creators } from './actions'
import { selectToken } from './selectors';

es6promise.polyfill()

const API_URL = 'http://localhost:8042';
const GET_DARYL_URL = `${API_URL}/daryl/cmd/get`;
const CREATE_DARYL_URL = `${API_URL}/public/daryl`;

function *loadAuth() {
  try {
    const authJSON = window.localStorage.getItem('auth');
    if (authJSON) {
      const auth = JSON.parse(authJSON);
      yield put(Creators.auth(true, false, auth.token, auth.darylId, auth.name));
    }
  } catch(e) {
    yield put(Creators.auth(true, false, '', '', ''));
  }
}

function *checkAuth() {
  const token = yield select(selectToken());
  if (!token) {
    yield put(Creators.auth(false, false, '', '', ''));
    return
  }

  try {
    const r = yield call(fetch, GET_DARYL_URL, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'X-Daryl-Auth-Token': token,
      },
    });
    const { resp: {daryl: { id, name } } } = yield call(() => r.json());
    yield put(Creators.auth(false, true, token, id, name));
  } catch (e) {
    yield put(Creators.auth(false, false, '', '', ''));
  }
}

function *createDaryl(action) {
  console.log('createDaryl', action);
  try {
    yield put(Creators.authCreating(true));
    const r = yield call(fetch, CREATE_DARYL_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name: action.name,
        email: action.email,
        password: action.password,
      }),
    });
    const { status, daryl: { id }, token: { hash: token } } = yield call(() => r.json());
    yield put(Creators.auth(false, true, token, id, action.name));
    window.localStorage.setItem('auth', JSON.stringify({
      token: token,
      darylid: id,
      name: action.name,
    }));
  } catch (e) {
    yield put(Creators.auth(false, false, '', '', ''));
  }
}

function *messageCreate(action) {
  console.log('messageCreate', action);
}

function *rootSaga () {
  if (typeof window == 'undefined') return;
  yield call(loadAuth);
  yield call(checkAuth);
  yield takeEvery('CREATE_DARYL', createDaryl);
  yield takeEvery('MESSAGE_CREATE', messageCreate);
}

export default rootSaga
