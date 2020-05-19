export const CREATE_QUESTION = 'CREATE_QUESTION'
export const GET_QUESTIONS = 'GET_QUESTIONS'

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