import { saveQuestionAnswer } from '../utils/api'
// import { userActionCreator } from '../actions/usersActions'
// import { setAuthedUser } from '../actions/authedUserActions'

export const CREATE_QUESTION = 'CREATE_QUESTION'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'

export function questionActionCreator (question) {
    return {
      type: CREATE_QUESTION,
      question,
    }
}
  
export function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}

// const authedUserId = 'sarahedo'

export const submitAnswer = (data) => {
  return (dispatch) => { //This shouldn't be removed 
    return saveQuestionAnswer(data)
  }
}