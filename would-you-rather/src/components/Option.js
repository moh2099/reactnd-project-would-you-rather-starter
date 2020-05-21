import React, { Component } from 'react'

class Option extends Component {
    render() {
        const option = this.props.option
       // const optNum = this.props.optNum
        const questionId = this.props.question
        const countVotes = Object.keys(option.votes).length
        // console.log(option);

        return (
            <p>
                <label>
                    <input className="with-gap" name={questionId} type="radio" />
                    <span className='black-text text-darken-3'> {option.text} </span>
                </label>
                <span className="badge">{ countVotes }</span>
            </p>
        )
    }
}

export default Option