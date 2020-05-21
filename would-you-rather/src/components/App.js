import React, { Component } from 'react';
import { initState } from '../actions/initState'
import { connect } from 'react-redux'
import Home from './Home'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'


class App extends Component {

  componentDidMount() {
    this.props.dispatch(initState())
    //console.log(this.props)
  }

  render() {
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
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/Logout'>Logout</NavLink></li>
                  </ul>
                </div>
              </div>

            </div>
          </nav>

          {/* <Dashboard props={this.props}/> wouln't work, you have to use route */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Logout' component={''} />
          </Switch>
        </div>
      </Router> 

    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}


export default connect(mapStateToProps)(App);
