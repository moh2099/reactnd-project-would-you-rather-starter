import { GET_USERS } from '../actions/usersActions'

export default function users(state = {}, action) {
  switch (action.type) {
    //The var name of this returned object is authed and can be modifeid or found in the combineReducer fucntion in the rootReducer

    case GET_USERS:
      //console.log(state)
      return {
        ...state,
        ...action.users
      }
    default:
      return state
  }
}