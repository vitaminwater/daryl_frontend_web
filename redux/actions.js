import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  createDaryl: ['name', 'email', 'password'],

  auth: ['loading', 'authenticated', 'token', 'darylId', 'name'],
  authCreating: ['creating'],
  authLoading: ['loading'],
  authAuthenticated: ['authenticated'],
  authToken: ['token'],
  authDarylId: ['darylId'],
  authName: ['name'],

  messageLoading: ['loading'],
  messageCreate: ['text', 'attrs'],

  habitLoading: ['loading'],

  sessionLoading: ['loading'],
}, {})

export {
  Types,
  Creators,
}
