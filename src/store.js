import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// para agregar llamados asincronicos dentro de action thunk, debe utilizarse
// como middleware. 
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

// https://github.com/zalmoxisus/redux-devtools-extension
// 1.2 Advanced store setup

const store = createStore(combineReducers(reducers), composeEnhancers(applyMiddleware(logger, thunk)));

export default store;