import  React, { Component } from 'react'
import { setAuthedUser } from '../actions/authedUserActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Logout extends Component {
    componentDidMount() { 
        console.log(this.props.dispatch(setAuthedUser(null)))
        this.props.history.push('/login')
        
    }
    render() { 
        return ('')
    }
}

export default connect()(Logout)