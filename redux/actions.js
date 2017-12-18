import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  authLoading: ['loading'],
  authAuthenticated: ['authenticated'],
  authToken: ['token'],
  authDarylId: ['darylId'],
}, {})

export {
  Types,
  Creators,
}
