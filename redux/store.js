import { fromJS } from 'immutable';
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'

import rootReducer, {INITIAL_STATE} from './reducer'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export function configureStore (state = INITIAL_STATE) {
  const store = createStore(
    rootReducer,
    !!state.toJS ? state : fromJS(state),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export function withReduxSaga (BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga(BaseComponent))
}
