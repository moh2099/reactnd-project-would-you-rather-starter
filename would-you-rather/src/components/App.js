import React, { Component } from 'react';
import { initState } from '../actions/initState'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


class App extends Component {

  componentDidMount() { 
    this.props.dispatch(initState())
    //console.log(this.props)
    }

  render() {
    return (
      <div className="App">
        {/* <Dashboard props={this.props}/> wouln't work, you have to use route */}
        <Router>
          <Route exact path='/' component={Dashboard} />
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}


export default connect(mapStateToProps)(App);
