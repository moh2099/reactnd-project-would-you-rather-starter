import React, { Component } from 'react';
import { initState } from '../actions/initState'
import { connect } from 'react-redux'
import Home from './Home'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import CreateQuestion from './CreateQuestion'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(initState())
    //console.log(this.props)
  }

  render() {
    const authedUser = this.props.authedUser

    return (
      <Router>

        <div className="App">
          <nav>
            <div className="nav-wrapper purple darken-1">
              <div className="row">
                <div className="col s4">
                  <a href="/" className="brand-logo padding-left-l10">would you rather</a>
                </div>
                <div className="col s4">
                  {/* Empty col  */}
                </div>
                <div className="col s4">
                  {
                    this.props.loading ? (
                      authedUser !== null ?
                        (
                          <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/new'>Create Question</NavLink></li>
                            <li><NavLink to='/Logout'>Logout</NavLink></li>
                            <li>
                              <span className="users-view-name red-text">{authedUser.name}</span>
                            </li>
                            {/* <li>
                              <span className="users-view-id">ID: {authedUser.id}</span>
                            </li> */}
                            <li>
                              <a href="/" className="avatar">
                                <img src={authedUser.avatarURL} alt="users view avatar" className="z-depth-4 circle" width="50" height="50"></img>
                              </a>
                            </li>
                          </ul>

                        ) : (<li><NavLink to='/Login'>Login</NavLink></li>)
                    ) : (<div className="title"><span>Loading...</span></div> )
                  }
                </div>
              </div>

            </div>
          </nav>

          {/* <Dashboard props={this.props}/> wouln't work, you have to use route */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/new' component={CreateQuestion} />
            <Route path='/Logout' component={''} />
          </Switch>
        </div>
      </Router>

    )
  }
}

//if you want to access the store, you should use the connect(mapStateToProps) in each component you want to access the store where the object (state) passed to mapStateToProps is the stateTree where all the actions dispatched
const mapStateToProps = ({ authed, users }) => {
  let authedUserID = authed.id
  let authedUser = users[authedUserID]

  return {
    authedUser,
    loading: Object.keys(authed).length !== 0 ? true : false
  }
}

export default connect(mapStateToProps)(App); //connect is necesseary to dispatch the initState
//export default connect()(App); //connect in this case has no need for mapStateToProps if we are not using the stateTree here or any state object
