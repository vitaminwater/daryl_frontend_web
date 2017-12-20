import { createSelector } from 'reselect'

export const selectAuth = () => state => state.get('auth');

const attrSelector = attr => () => createSelector(
  selectAuth(),
  auth => auth.get(attr),
)

export const selectLoading = attrSelector('loading')
export const selectAuthenticated = attrSelector('authenticated')
export const selectToken = attrSelector('token')
export const selectDarylId = attrSelector('token')
export const selectName = attrSelector('name')
