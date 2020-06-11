const addToCart = product => ({ 
  type: 'ADD_TO_CART',
  payload: product,
});

const removeToCart = product => ({
    type: 'REMOVE_FROM_CART',
    payload: product.id,
});

export { addToCart, removeToCart };