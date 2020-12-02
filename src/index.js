import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainAppContainer from './containers/MainAppContainer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import reducer from './reducers/shopReducer'
import {getAllProducts} from "./actions/shoppingActions";
// LOCAL STORAGE
// function saveToLocalStorage(state) {
//     try {
//         const serializedState = JSON.stringify(state)
//         localStorage.setItem('state', serializedState)
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// function loadFromLocalStorage() {
//     try {
//         const serializedState = localStorage.getItem('state')
//         if(serializedState === null) return undefined
//         return JSON.parse(serializedState)
//     } catch (e) {
//         console.log(e)
//         return undefined
//     }
// }
// LOCAL STORAGE

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
// const persistedState = loadFromLocalStorage()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /*persistedState*/  composeEnhancers(
    applyMiddleware(...middleware)
))

store.dispatch(getAllProducts())
// store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <MainAppContainer />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

