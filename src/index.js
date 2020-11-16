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

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
))

store.dispatch(getAllProducts())

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <MainAppContainer />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

