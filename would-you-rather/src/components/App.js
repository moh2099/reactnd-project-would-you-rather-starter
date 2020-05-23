import React, { Component } from 'react';
import { initState } from '../actions/initState'
import { connect } from 'react-redux'
import Home from './Home'
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect, Link  } from 'react-router-dom'
import CreateQuestion from './CreateQuestion'
import Login from './Login'


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
                <div className="col">
                  <Link to="/home" className="brand-logo padding-left-l10">would you rather</Link>
                </div>
                <div className="col s7">
                  {/* Empty col  */}
                </div>
                <div className="col">
                  {
                    this.props.loading ? (
                      authedUser != null ? //NOTE: !== null doesn't work, the comparision will be true always since it will compare the type of the const with null where it is always type(const) != type(null). so always compare null with two operands only != or ==
                        (
                          <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to='/home'>Home</NavLink></li>
                            <li><NavLink to='/new'>New Questions</NavLink></li>
                            <li><NavLink to='/leaderboard'>Leaderboard</NavLink></li>
                            <li><NavLink to='/logout'>Logout</NavLink></li>
                            <li>
                              <span className="users-view-name red-text">{authedUser.name}</span>
                            </li>
                            {/* <li>
                              <span className="users-view-id">ID: {authedUser.id}</span>
                            </li> */}
                            <li>
                              <Link to="/home" className="avatar">
                                <img src={authedUser.avatarURL} alt="users view avatar" className="z-depth-4 circle" width="50" height="50"></img>
                              </Link>
                            </li>
                            <Redirect to='/home'/>
                          </ul>

                        ) : (
                          <ul id="nav-mobile" className="right hide-on-med-and-down">
                             <li><NavLink to='/home'>home</NavLink></li>
                            <li><NavLink to='/login'>Login</NavLink></li>
                          </ul>
                        )
                    ) : ( <ul id="nav-mobile" className="right hide-on-med-and-down"><span>Loading</span><Redirect to='/home'/></ul>)
                  }
                </div>
              </div>

            </div>
          </nav>

          {/* <Dashboard props={this.props}/> wouln't work, you have to use route */}
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route path='/new' component={CreateQuestion} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={''} />
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
