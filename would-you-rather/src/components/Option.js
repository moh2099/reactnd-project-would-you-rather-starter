import React, { Component } from 'react'


class Option extends Component {
    handleClick = (e) => {
        //console.log(e.target);
        if (e.target.nodeName === 'INPUT') {
            this.props.data({
                question_id: this.props.question,
                value: this.props.optNum
            })
        }
    }

    render() {
        //console.log(this.state)
        
        const option = this.props.option
       // const optNum = this.props.optNum
        const questionId = this.props.question
        const countVotes = Object.keys(option.votes).length
        // console.log(option);

        return (
            <p onClick={this.handleClick}>
                <label>
                    <input className="with-gap" name={questionId} type="radio" value={option.text} />
                    <span className='black-text text-darken-3'> {option.text} </span>
                </label>
                <span className="badge">{countVotes}</span>
            </p>
        )
    }
}

export default Option