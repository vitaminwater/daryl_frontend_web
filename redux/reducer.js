import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = fromJS({
  auth: {
    creating: false,
    loading: true,
    authenticated: false,
    token: '',
    darylId: '',
    name: '',
  },
  session: {
    loading: false,
    exists: false,
    slices: [],
  },
  habit: {
    loading: false,
    habits: [],
  },
  thread: {
    loading: false,
    threads: [],
  },
})

const mergeState = prefix => (state, action) => {
  Object.keys(action).filter((k) => k != 'type').forEach((k) => {
    state = state.setIn([prefix, k], action[k]);
  });
  return state;
}

export const HANDLERS = {
  ['AUTH']: mergeState('auth'),
  ['AUTH_CREATING']: mergeState('auth'),
  ['AUTH_LOADING']: mergeState('auth'),
  ['AUTH_AUTHENTICATED']: mergeState('auth'),
  ['AUTH_TOKEN']: mergeState('auth'),
  ['AUTH_DARYL_ID']: mergeState('auth'),

  ['SESSION_LOADING']: mergeState('session'),

  ['HABIT_LOADING']: mergeState('habit'),

  ['THREAD_LOADING']: mergeState('thread'),
}

export default createReducer(INITIAL_STATE, HANDLERS)
