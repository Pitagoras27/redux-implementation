import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// para agregar llamados asincronicos dentro de action thunk, debe utilizarse
// como middleware. 
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const cart = (state = [], action) => {
  const { type, payload } = action;
   if (type === 'ADD_TO_CART') {
    return state.concat(payload)
  } else if (type === 'REMOVE_FROM_CART') {
    return state.filter(product => product.id !== payload)
  }

  return state;
}


const products = (state = [], action) => {
  const { type, payload } = action;
  if (type === 'LOAD_PRODUCTS'){
    return payload
  }

  return state;
}


const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

// https://github.com/zalmoxisus/redux-devtools-extension
// 1.2 Advanced store setup

const store = createStore(combineReducers({cart, products}), composeEnhancers(applyMiddleware(logger, thunk)));

export default store;