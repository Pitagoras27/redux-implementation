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

export { cart, products };