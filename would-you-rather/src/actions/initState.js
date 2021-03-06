import { getInitState } from '../utils/api'
import { userActionCreator } from '../actions/usersActions'
//import { questionActionCreator } from '../actions/questionsActions'
import { getQuestions } from '../actions/questionsActions'
import { setAuthedUser } from '../actions/authedUserActions'
//import { showLoading, hideLoading } from 'react-redux-loading'
 
//const authedUserId = 'sarahedo'
const authedUserId = null 

export const initState = () => {
  return (dispatch) => {
    return getInitState().then((res) => { 
       dispatch(userActionCreator(res.users))
       dispatch(getQuestions(res.questions))
       dispatch(setAuthedUser(authedUserId))
    })
  }
}