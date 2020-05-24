import React, { Component, createRef } from 'react'
import { saveQuestion } from '../utils/api'
import { connect } from 'react-redux'
import { questionActionCreator } from '../actions/questionsActions'
import { reloadUsers } from '../actions/reload'
    
class CreateQuestion extends Component {
    constructor() { //Refs should be declared in the constructor
        super()    // this is a must, YOU MUST CALL SUPER CONSTRUCTOR otherwise you will get: [ReferenceError: must call super constructor before using 'this' in derived class constructor]
        this.opt1 = createRef() // this should be also in the DOM element referenced as ( ref={this.opt1} )
        this.opt2 = createRef()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.opt1.current.value)
        // console.log(this.opt2.current.value)
        let author = this.props.authedUser.id
        let optionOneText = this.opt1.current.value
        let optionTwoText = this.opt2.current.value
        let data = { author, optionOneText, optionTwoText }
        saveQuestion(data).then(question => {
 
            let newQuestion = {
                [question.id]: question
            }

            this.props.dispatch(questionActionCreator(newQuestion))
            this.props.dispatch(reloadUsers())
           // this.props.dispatch(reloadQuestions())
            this.props.history.push('/home')
        })
    }
    render() {
        return (
            <div className="container">
                <div className=" container col s12 m12 l6">
                    <div className="card-panel">
                        <h4 className="header2">Create Question</h4>
                        <h6 className="header2">would you rather:</h6>
                        <div className="row">
                            <form className="col s12" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="opt1" type="text" ref={this.opt1}></input>
                                        <label htmlFor="opt1" className="">Option 1</label>
                                    </div>
                                </div>
                                <h5>or</h5>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="opt2" type="text" ref={this.opt2}></input>
                                        <label htmlFor="opt2" className="">Option 2</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="center-align input-field col s12">
                                        <button className="btn cyan waves-effect waves-light" type="submit" name="action">Submit
                                <i className="mdi-content-send right"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authed }) => { //authed is one of the state Object so destructuring it, returns its value, in other words, you can find it in state.authed
    return {
        authedUser: authed
    }
}

export default connect(mapStateToProps)(CreateQuestion)
