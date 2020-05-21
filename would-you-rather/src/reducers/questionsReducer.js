import { CREATE_QUESTION } from '../actions/questionsActions'
import { GET_QUESTIONS } from '../actions/questionsActions'

export default function users(state = {}, action) {
    switch (action.type) {
        //The var name of this returned object is questions and can be modifeid or found in the combineReducer fucntion in the rootReducer
        case CREATE_QUESTION:
            return {
                ...state,
                ...action.question
            }
        case GET_QUESTIONS:
            //console.log('get questions case')
            //console.log(action)
            return {
                ...state,
                ...action.questions
            }
        default:
            return state
    }
}