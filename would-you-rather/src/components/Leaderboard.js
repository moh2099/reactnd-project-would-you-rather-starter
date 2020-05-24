import React, { Component } from 'react'
import { connect } from 'react-redux'
import { json2array } from '../utils/json2array'

class Leaderboard extends Component {


    // countAnsweredQuestions = (user) => {
    //     let questionsArray = json2array(this.props.questions)
    //     let count = 0        
    //     questionsArray.map(question => {
    //         if (question.optionOne.votes.includes(this.props.authedUser) || question.optionTwo.votes.includes(this.props.authedUser)) {
    //             count++
    //         }
    //         return ''
    //     })
    //     return count
    // }

    // countCreatedQuestions = (user) => {
    //     let questionsArray = json2array(this.props.questions)
    //     let count = 0
    //     questionsArray.map(question => {
    //         if (question.author === this.props.authedUser) {
    //             count++
    //         }
    //         return ''
    //     })
    //     return count
    // }

    render() {
        //this.props.dispatch(userActionCreator(users))
        let usersWithDetails = json2array(this.props.usersWithDetails)
        return (
            <div className="container">
                {
                    usersWithDetails.map(user => {
 
                        return (
                            <div key={user.data.id} className="row card">
                                <div className="col s4">
                                    <div className="section users-view">
                                        <div className="col">
                                            <div className="display-flex media">
                                                <a href="/" className="avatar">
                                                    <img src={user.data.avatarURL} alt="users view avatar" className="z-depth-4 circle" width="64" height="64"></img>
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="media-heading">
                                                    <span className="users-view-name">{user.data.name}</span>
                                                </h6>
                                                <span>ID: </span>
                                                <span className="users-view-id">{user.data.id}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    {/* <div className='row'>
                                        <div className='col center-align'>
                                            <span className='card-title'> title asks: </span>
                                            <span className='card-title'>would you rather</span>
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className='col left-align'>
                                            <p>
                                                <label>
                                                    <span className='black-text text-darken-3'> Answered Questions  {user.answeredQuestions} </span>
                                                </label>
                                            </p>
                                            <p>
                                                <label>
                                                    <span className='black-text text-darken-3'> Created Questions  {user.createdQuestions} </span>
                                                </label>
                                            </p>
                                        </div>
                                        <div className="col">
                                            <span className='black-text text-darken-3'> Score: {user.score} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({ authed, users }) => {

    let usersArray = json2array(users)

    let usersWithDetails = usersArray.map(user => {

        let answeredQuestions = Object.keys(user.answers).length
        let createdQuestions = Object.keys(user.questions).length
        let score = answeredQuestions + createdQuestions

        return {
            data: user,
            score,
            answeredQuestions,
            createdQuestions
        }
    })

    usersWithDetails = usersWithDetails.sort((a, b) => b.score - a.score)

    return {
        authedUser: authed.id,
        usersWithDetails
    }
}


export default connect(mapStateToProps)(Leaderboard)