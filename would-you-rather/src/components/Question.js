import React, { Component } from 'react'
import { connect } from 'react-redux'
 
//const { questions } = this.props

const Question = () => {
    console.log(this.props)
    return (
        <div>
            <h1>This is a question</h1>
        </div>
    )
}

const mapStateToProps = (state) => { 
    return {
        questions: state
    }
}
 
export default connect()(Question)

