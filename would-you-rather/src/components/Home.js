import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { initState } from '../actions/initState'

class Home extends Component {
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
    //  console.log(this.props)
  }

  render() {
    return (
      <div className='container'>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {
            this.props.loading ?
              this.props.questions.map((id) => (
                //                console.log(question)
                <li key={id}>
                  <Question key={id} id={id} />
                </li>
              )) : ''
          }
        </ul>
      </div>
    )
  }
}
//Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

//This function is used for passing the stateTree (contains all the states of all dispatched actions) into the props using the connect function
function mapStateToProps({ authed, questions }) {
  
  return {
    //users,
    authed,
    questions: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    loading: Object.keys(questions).length !== 0 ? true : false
    //loading: Object.keys(users).length !== 0 && Object.keys(questions).length !== 0 ? true : false

  }
}

export default connect(mapStateToProps)(Home)