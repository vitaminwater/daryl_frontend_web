import { createSelector } from 'reselect'

export const selectAuth = () => state => state.get('auth');

export const selectToken = () => createSelector(
  selectAuth(),
  auth => auth.get('token'),
)
