import { createStore } from 'redux';

const initialStore = {
  cart: [],
}

const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === 'ADD_TO_CART') {
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

const store = createStore(reducer, initialStore);

export default store;