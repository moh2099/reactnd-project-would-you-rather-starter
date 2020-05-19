import { GET_USERS } from '../actions/usersActions'

export default function users(state = {}, action) {
   switch(action.type) {
      case GET_USERS:
      //console.log(state)
      return {
        ...state,
        ...action.users
      }
    default :
      return state
  }
}