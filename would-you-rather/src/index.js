import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { createStore, applyMiddleware } from 'redux'
// const logger = (store) => (next) => (action) => {
//   console.group(action.type)
//     console.log('The action: ', action)
//     const returnValue = next(action)
//     console.log('The new state: ', store.getState())
//   console.groupEnd()
//   return returnValue
// }

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode> {/*  StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants. */}
    <App />
    </React.StrictMode>
  </Provider>
  
  ,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
