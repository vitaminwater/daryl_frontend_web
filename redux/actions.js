import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  auth: ['loading', 'authenticated', 'token', 'darylId', 'name'],
  authLoading: ['loading'],
  authAuthenticated: ['authenticated'],
  authToken: ['token'],
  authDarylId: ['darylId'],
  authName: ['name'],
}, {})

export {
  Types,
  Creators,
}
