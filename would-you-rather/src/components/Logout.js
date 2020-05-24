import  { Component } from 'react'
import { setAuthedUser } from '../actions/authedUserActions'
import { connect } from 'react-redux'
 

class Logout extends Component {
    componentDidMount() { 
        this.props.dispatch(setAuthedUser(null))
        this.props.history.push('/login')
        
    }
    render() { 
        return ('')
    }
}

export default connect()(Logout)