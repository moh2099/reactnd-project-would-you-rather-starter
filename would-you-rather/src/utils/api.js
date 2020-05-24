import * as database from './_DATA'

export const getInitState = () => { 
    return Promise.all([
        database._getUsers(),
        database._getQuestions(),
    ]).then(([users, questions]) => ({ 
        users,
        questions
    }))
}

// export const getUsers = () => { 
//     return Promise.all([
//         database._getUsers()])
//     .then((users) => ({ 
//         users
//     }))
// }

export const getQuestions = () => { 
    return Promise.all([
        database._getQuestions()])
    .then((questions) => ({ 
        questions
    }))
}

export const getQuestion = (id) => { 
    return Promise.all([
        database._getQuestions()])
    .then((questions) => ({ 
        question: questions[id]
    }))
}

export function saveQuestion (data) { //`author`, `optionOneText`, and `optionTwoText`
    return database._saveQuestion(data)
  }
  
export function saveQuestionAnswer(data) { // data = { authedUser, qid, answer }      
    return database._saveQuestionAnswer(data)
  }



