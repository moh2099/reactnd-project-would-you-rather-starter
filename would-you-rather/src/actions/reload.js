import { getQuestions as getQuestionsApi } from '../utils/api'
import { getQuestions } from '../actions/questionsActions'

export const reloadQuestions = () => {
    //dispatching getQuestions will re-render the component since the store has been changed
    return (dispatch) => {
      return getQuestionsApi().then((res) => {
        //console.log(res.questions[0]);
        dispatch(getQuestions(res.questions[0]))
    
      })
    }
  }