import { SET_AUTHED_USER } from '../actions/authedUserActions'

export default function users(state = {}, action) {
  switch (action.type) {
    //The var name of this returned object is authed and can be modifeid or found in the combineReducer fucntion in the rootReducer
    case SET_AUTHED_USER:
      let authedID = action.id
      return {
        ...state,
        id: authedID
      }
    default:
      return state
  }
}