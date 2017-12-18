/* global fetch */

import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest, select} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { Types, Creators } from './actions'
import { selectToken } from './selectors';

es6promise.polyfill()

const API_URL = 'http://localhost:8042';
const GET_DARYL_URL = `${API_URL}/daryl/cmd/get`;

function *checkAuth() {
  const token = yield select(selectToken());
  if (!token) {
    yield put(Creators.authLoading(false));
    yield put(Creators.authAuthenticated(false));
    yield put(Creators.authDarylId(''));
    return
  }

  try {
    const r = yield call(fetch, GET_DARYL_URL, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'X-Daryl-Auth-Token': token,
      },
    });
    const { resp: {daryl: { id } } } = yield call(() => r.json());
    yield put(Creators.authLoading(false));
    yield put(Creators.authAuthenticated(true));
    yield put(Creators.authDarylId(id));
  } catch (e) {
    yield put(Creators.authLoading(false));
    yield put(Creators.authAuthenticated(false));
    yield put(Creators.authToken(''));
    yield put(Creators.authDarylId(''));
  }
}

function *rootSaga () {
  yield call(checkAuth);
}

export default rootSaga
