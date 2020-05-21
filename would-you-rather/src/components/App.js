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

//if you want to accessthe store, you should use the connect(mapStateToProps) in each component you want to access the store where the object (state) passed to mapStateToProps is the stateTree where all the actions dispatched
// const mapStateToProps = (state) => {
//   return {
//     state: state
//   }
// }


export default connect()(App); //connect here is necesseary to dispatch the initState, no need for mapStateToProps since we are not using the stateTree here or any state object
