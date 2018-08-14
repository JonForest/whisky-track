import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import whiskies from './app/routes/Whiskies/duck/reducers'

const store = createStore(combineReducers({whiskies}), applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
