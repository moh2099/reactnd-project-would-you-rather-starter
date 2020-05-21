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
        const question_id = this.props.id
        const question = this.props.questions[question_id]
       // console.log(question)
       console.log(this.props);
        return (
            this.isAnsweredQuestion(question) === true ? ( <div className='card'>
            <div className='row'>
                <div className='col center-align'>
                <span className='card-title'>{question.author} asks: </span>
                    <span className='card-title'>would you rather</span>
                </div>
            </div>
            <div className="row">
                <div className='col s4 left-align'>
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
        </div>) : ('NOT ANSWERED')
            
           
        )
    }
}

const mapStateToProps = ({ authed, questions }) => {
    /*
    Note: you can get whatever you want from dispatches in the initState in this function,
    however, the variable name is same as the reducer which will be find or can be modified in cmobineReducers function in the rootReducer
    */
    return {
        authed,
        questions: questions
    }
}


export default connect(mapStateToProps)(Question)

