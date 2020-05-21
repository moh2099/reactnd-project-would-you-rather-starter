import { combineReducers } from 'redux'
import authedUserReducer from './authedUserReducer'
import usersReducer from './usersReducer'
import questionsReducer from './questionsReducer'

export default combineReducers({
    authed: authedUserReducer,
    users: usersReducer,
    questions: questionsReducer,
})
 
//NOTE: autherUser, users, and questions here are the names of the states returned by the reducers