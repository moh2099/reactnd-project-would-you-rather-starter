import { getInitState } from '../utils/api'
import { userActionCreator } from '../actions/usersActions'
//import { questionActionCreator } from '../actions/questionsActions'
import { getQuestions } from '../actions/questionsActions'
import { authedUserActionCreator } from '../actions/autherUserActions'
//import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'

const authedUserId = 'tylermcginnis'

export const initState = () => {
  return (dispatch) => {
    return getInitState().then(({ users, questions }) => { 
    //  let res_json = JSON.parse(JSON.stringify(res)) //convert Object to json to access object keys as properties
      dispatch(userActionCreator(users))
      dispatch(getQuestions(questions))
      dispatch(setAuthedUser(authedUserId))

  //      dispatch(authedUserActionCreator(authedUserId))
       // console.log(res)
    })
      // .then(({ users, tweets }) => {
      //   // dispatch(receiveUsers(users))
      //   // dispatch(receiveTweets(tweets))
      //   // dispatch(setAuthedUser(AUTHED_ID))
      //   // dispatch(hideLoading())
      // })
  }
}