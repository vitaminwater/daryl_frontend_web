import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce'
import Types from './types'

const v = (key, def) => typeof window == 'undefined' ? def : window.localStorage.getItem(key);

export const INITIAL_STATE = fromJS({
  auth: {
    loading: true,
    authenticated: false,
    token: v('auth_token', 'e8c35b9c-8535-4ce1-a00a-14dbe2b25443'),
    darylId: v('auth_daryl_id', '52e8ba06-492b-4d6c-b920-6b7d13d67a82'),
  },
})

export const HANDLERS = {
}

export default createReducer(INITIAL_STATE, HANDLERS)
