import { createStore, applyMiddleware } from 'redux';
// para agregar llamados asincronicos dentro de action thunk, debe utilizarse
// como middleware. 
import thunk from 'redux-thunk';

const initialStore = {
  cart: [],
  products: [],
}

const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === 'LOAD_PRODUCTS'){
    return {
      ...state,
      products: payload
    }
  } else if (type === 'ADD_TO_CART') {
    return {
      ...state,
      cart: state.cart.concat(payload),
    }
  } else if (type === 'REMOVE_FROM_CART') {
    return {
      ...state,
      cart: state.cart.filter(product => product.id !== payload)
    }
  }

  return state;
}

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const store = createStore(reducer, initialStore, applyMiddleware(logger, thunk));

export default store;