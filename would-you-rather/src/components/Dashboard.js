import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { initState } from '../actions/initState'

class Dashboard extends Component {
  componentDidMount() { 
    {/*
    //console.log(this.props) 
    this will return this.props.state to be empty object with the reducers in it, e.g. state: { users: {}, questions: {}}
    because components are mounted only once and will mount again (with every changes to be deleted) if it is deleted or unmounted,
    so to access the returned state from the initState() you should use componentDidUpdate() or render() since they do not unmount(delete) the component,
    this.props will have the valid state object there.
  */}
  }
  componentDidUpdate() { 
    //this will not be called for the initial render
     console.log(this.props)
  }
  render() {
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {/* {
            this.props.questionIds.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))
          } */}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(Dashboard)