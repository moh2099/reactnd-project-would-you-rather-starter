import React, { Component } from 'react'
import { connect } from 'react-redux'
import { json2array } from '../utils/json2array'
import { setAuthedUser } from '../actions/authedUserActions'
import M from 'materialize-css'

class Login extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    handleChange = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(e.target.value))
    }

    render() {
        let users = json2array(this.props.users)
        return (
            Object.keys(this.props.users).length > 0 ? (
                <div className="container">
                    <div className=" container col s12 m12 l6">
                        <div className="card-panel">
                            <h4 className="header2">Please log into your account</h4>
                            <div className="row">
                                <br /><br />
                                <div className="input-field">
                                    <select className="icons" onChange={this.handleChange}>
                                        <option value={null} >Select a user</option>
                                        {
                                            users.map(user => {
                                                return <option key={user.id} value={user.id} data-icon={user.avatarURL} className="left">{user.name}</option>
                                            })
                                        }

                                    </select>
                                    <label>Images in select</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : ('')
        )
    }
}

const mapStateToProps = ({ users }) => {

    return {
        users
    }
}


export default connect(mapStateToProps)(Login)
