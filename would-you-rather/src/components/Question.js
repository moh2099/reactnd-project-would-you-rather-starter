import React, { Component } from 'react'
import { connect } from 'react-redux'
import Option from './Option'
//const { questions } = this.props

class Question extends Component {
    state = {
        selected: ''
    }
    handelSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
    }

    isAnsweredQuestion = (question) => {
        //console.log(this.props);
        return true
    }
    render() {
        // console.log(question)
        const question = this.props.questions[this.props.id] //here we are using all the questions to get only the required question from them, since we are only passing the question_id as props from the Home component
        const authorID = question.author
        const author = this.props.users[authorID]

        return (
            this.isAnsweredQuestion(question) === true ? (
                <div className='container'>
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
                                    <form className='' onSubmit={this.handelSubmit} >
                                        <Option question={question.id} option={question.optionOne} selection={(e) => console.log(e)} />
                                        <Option question={question.id} option={question.optionTwo} onClick={(e) => this.setState({ selected: e.target.value })} />
                                        <div className="row">
                                            <div className="col center">
                                                <button className='btn green'>Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>) : ('NOT ANSWERED')


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
        //      authedUser,
        users,
        questions
    }
}


export default connect(mapStateToProps)(Question)

