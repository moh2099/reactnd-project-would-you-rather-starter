import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import { Redirect } from 'react-router-dom'
import { json2array } from '../utils/json2array'
import Poll from './Poll'
//import { initState } from '../actions/initState'

class Home extends Component {
  // componentDidMount() {
  //   {/*
  //   //console.log(this.props) 
  //   this will return this.props.state to be empty object with the reducers in it, e.g. state: { users: {}, questions: {}}
  //   because components are mounted only once and will mount again (with every changes to be deleted) if it is deleted or unmounted,
  //   so to access the returned state from the initState() you should use componentDidUpdate() or render() since they do not unmount(delete) the component,
  //   this.props will have the valid state object there.
  // */}
  // }
  // componentDidUpdate() {
  //   //this will not be called for the initial render
  //   //  console.log(this.props)
  // }

  handleViewPoll = ({ question }) => {
    this.props.history.push({ pathname: '/questions/' + question.id, question })
  }

  render() {
    let authed = Object.keys(this.props.authed).length > 0 ? this.props.authed.id : null
    return (
      <div className='container'>
        {
          this.props.isLoading === false ? (
            authed != null ? (
              <ul className='dashboard-list'>
                <h3 className='center'>Your Timeline</h3>
                <Tabs forceRenderTabPanel defaultIndex={0}>
                  <TabList>
                    <Tab>Unanswered Questions</Tab>
                    <Tab>Answered Questions</Tab>
                  </TabList>
                  <TabPanel>
                    {
                      this.props.UnansweredQuestions.map((id) => (
                        // console.log(question)
                        <li key={id}>
                          <Poll key={id} id={id} isAnswered={false} data={this.handleViewPoll} />
                          {/* <Question isAnswered={false} key={id} id={id} /> */}
                        </li>
                      ))
                    }
                  </TabPanel>

                  <TabPanel>
                    {
                      this.props.AnsweredQuestions.map((id) => (
                        // console.log(question)
                        <li key={id}>
                          <Poll key={id} id={id} isAnswered={true} data={this.handleViewPoll} />
                          {/* <Question isAnswered={true} key={id} id={id} /> */}
                        </li>
                      ))
                    }
                  </TabPanel>
                </Tabs>
              </ul>) : (
                <div className='container'>
                  <h3 className='center'> Please Login First</h3>
                  <Redirect to='/login' />

                </div>

              )
          ) : (<h3 className='center'> Loading... </h3>)
        }

      </div>
    )
  }
}

//Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)

//This function is used for passing the stateTree (contains all the states of all dispatched actions) into the props using the connect function
function mapStateToProps({ authed, questions }) {

  let AnsweredQuestions = []
  let UnansweredQuestions = []
  let questionsArray = json2array(questions)

  questionsArray = questionsArray.sort((a, b) => b.timestamp - a.timestamp)

  questionsArray.map(q => {

    if (q.optionOne.votes.includes(authed.id) || q.optionTwo.votes.includes(authed.id)) {
      AnsweredQuestions.push(q.id)
    } else {
      UnansweredQuestions.push(q.id)
    }
    return ''
  })


  // console.log(AnsweredQuestions)
  // console.log(UnansweredQuestions)
  //console.log(authed.id === null )


  return {
    //users,
    UnansweredQuestions,
    AnsweredQuestions,
    authed,
    questions_ids: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    isLoading: Object.keys(questions).length === 0 && Object.keys(authed).length === 0 ? true : false
    //loading: Object.keys(users).length !== 0 && Object.keys(questions).length !== 0 ? true : false

  }
}

export default connect(mapStateToProps)(Home)