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

  messageCreate: ['text', 'attrs'],
}, {})

export {
  Types,
  Creators,
}
