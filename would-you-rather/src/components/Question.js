import React, { Component } from 'react'
import { connect } from 'react-redux'
import Option from './Option'
import { submitAnswer } from '../actions/questionsActions'
import { reloadQuestions, reloadUsers } from '../actions/reload'
import { Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'

//const { questions } = this.props

class Question extends Component {
    state = {
        authedUser: '',
        qid: '',
        answer: ''
    }
    handleSelection = (data) => {
        // e.preventDefault()
        // console.log(value);
        this.setState({ authedUser: this.props.authedUser, qid: data.question_id, answer: data.value })
    }

    handleSubmit = (e) => {        
        e.preventDefault()

        if (this.state.answer === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Oops..',
                text: 'Please select an option'
            })
         }
        else {
            //console.log(this.state.selection);
            //console.log(this.props.authedUser);
            //console.log(this.state);
            let data = this.state
            this.props.dispatch(submitAnswer(data))
            this.props.dispatch(reloadQuestions()) //dispatch questions again so that the Home component is rendered again
            this.props.dispatch(reloadUsers())
            this.props.history.push('/home')
        }
    }

    // isAnsweredQuestion = (question) => {
    //     //console.log(this.props);
    //     return true
    // }

    render() {
        //console.log(this.props.match.params.question_id)
        //console.log(this.props.authedUser == null)
        
        const question = Object.keys(this.props.questions).length > 0 ? this.props.questions[this.props.match.params.question_id] : '' //here we are using all the questions to get only the required question from them, since we are only passing the question_id as props from the Home component
        const authorID = question.author != null ? question.author : ''
        const author = authorID != null ? this.props.users[authorID] : ''

        return (
            //this.isAnsweredQuestion(question) === true ? (
            <div className='container'>
                <br /><br />
                <br /><br />

                {
                    this.props.authedUser != null ?
                        (
                            <div className="row card">
                                <div className="col s4">
                                    <div className="section users-view">
                                        <div className="col">
                                            <div className="display-flex media">
                                                <a href="/" className="avatar">
                                                    <img src={author.avatarURL} alt="users view avatar" className="z-depth-4 circle" width="64" height="64"></img>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="media-heading">
                                                    <span className="users-view-name">{author.name}</span>
                                                </h6>
                                                <span>ID: </span>
                                                <span className="users-view-id">{author.id}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='row'>
                                        <div className='col center-align'>
                                            <span className='card-title'>{question.author} asks: </span>
                                            <span className='card-title'>would you rather</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className='col left-align'>
                                            <form onSubmit={this.handleSubmit}>
                                                <Option question={question.id} option={question.optionOne} data={this.handleSelection} optNum={'optionOne'} />
                                                <Option question={question.id} option={question.optionTwo} data={this.handleSelection} optNum={'optionTwo'} />
                                                <div className="row">
                                                    <div className="col center">
                                                        {
                                                            this.props.isAnswered ? (<button className='btn green' disabled>Submit</button>) : (
                                                                <button className='btn green'>Submit</button>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (<Redirect to='/home' />)
                }

            </div> //) : ('NOT ANSWERED')
        )
    }
}

//This function is used for passing the stateTree (contains all the states of all dispatched actions) into the props using the connect function
const mapStateToProps = ({ authed, users, questions }) => {
    /*
    Note: you can get whatever you want from dispatches in the store from this function,
    however, the variable name is same as the reducer which will be find or can be modified in combineReducers function in the rootReducer
    */

    return {
        authedUser: authed.id,
        users,
        questions
    }
}

export default connect(mapStateToProps)(Question)

