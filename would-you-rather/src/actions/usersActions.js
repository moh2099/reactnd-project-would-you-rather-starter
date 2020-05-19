export const GET_USERS = 'GET_USERS'

export function userActionCreator(users) {
     return {
      type: GET_USERS,
      users,
    }
  }