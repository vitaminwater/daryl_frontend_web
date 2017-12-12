/* global fetch */

import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import {actionTypes, failure, loadDataSuccess, tickClock} from './actions'

es6promise.polyfill()

function * rootSaga () {
}

export default rootSaga
