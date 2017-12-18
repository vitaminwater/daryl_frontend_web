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

function *loadAuth() {
  try {
    if (typeof window == 'undefined') {
      // TODO server side etcd
    } else {
      const authJSON = window.localStorage.getItem('auth');
      if (authJSON) {
        const auth = JSON.parse(authJSON);
        yield put(Creators.auth(true, false, auth.token, auth.darylId, auth.name));
      }
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

function *rootSaga () {
  yield call(loadAuth);
  yield call(checkAuth);
}

export default rootSaga
