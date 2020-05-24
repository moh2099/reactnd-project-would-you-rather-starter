import React, { Component } from 'react'
import { connect } from 'react-redux'
import Option from './Option'

class Poll extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        let qid = e.target.elements[0].id
        let question = this.props.questions[qid]
        //redirect to Question Component in the route questions/:question_id
        this.props.data({
            question
        })
    }

    selectedAnswer = (question) => {

        let authedUser = this.props.authedUser

        if (question.optionOne.votes.includes(authedUser)) {
            return(
                <div>
                    <Option question={question.id} option={question.optionOne} data={this.handleSelection} optNum={'optionOne'} selected={true} disabled={true} />
                    <Option question={question.id} option={question.optionTwo} data={this.handleSelection} optNum={'optionTwo'} selected={false} disabled={true} />
                </div>
            )


        } else if (question.optionTwo.votes.includes(authedUser)) {
            return(
                <div>
                    <Option question={question.id} option={question.optionOne} data={this.handleSelection} optNum={'optionOne'} selected={false} disabled={true} />
                    <Option question={question.id} option={question.optionTwo} data={this.handleSelection} optNum={'optionTwo'} selected={true} disabled={true} />
                </div>
            )

        }
    }


    render() {
        // console.log(question)

        const question = this.props.questions[this.props.id] //here we are using all the questions to get only the required question from them, since we are only passing the question_id as props from the Home component
        const authorID = question.author
        const author = this.props.users[authorID]

        return (
            //this.isAnsweredQuestion(question) === true ? (
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

                    {
                        this.props.isAnswered === false ? (
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
                                            {/* <span className='black-text text-darken-3'> {question.optionOne.text} </span> */}
                                            <div className="row">
                                                <div className="col center">
                                                    <input className="with-gap" id={question.id} name={question.id} type="text" value={"..." + question.optionOne.text + "..."} disabled />
                                                    <button className='btn green'>View Poll</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>) : (
                                <div className="col">
                                    <div className='row'>
                                        <h5 >Added by {question.author.name} </h5>
                                        <h6>Results: </h6>
                                    </div>
                                    <div className="row">
                                        <div className='col left-align'>
                                            <span className='card-title'>Would you rather</span>
                                            {/* you have to add your Choice as props into the option and disable both options plus calculating the results*/}

                                            {
                                                this.selectedAnswer(question)
                                            }

                                            {/* you have to add your Choice as props into the option and disable both options plus calculating the results*/}

                                        </div>

                                    </div>
                                </div>


                            )
                    }


                </div>

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

export default connect(mapStateToProps)(Poll)

