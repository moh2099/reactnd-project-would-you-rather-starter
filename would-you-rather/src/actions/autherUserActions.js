export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function authedUserActionCreator (authedUserId) {
    return {
      type: SET_AUTHED_USER,
      authedUserId,
    }
  }