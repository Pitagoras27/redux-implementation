import axios from 'axios';

const loadProducts = () => dispatch => {
  const getData = axios.get('http://localhost:3002/products');
  getData.then(products => {
    dispatch({
      type: 'LOAD_PRODUCTS',
      payload: products.data,
    })
  })
}

const addToCart = product => ({ 
  type: 'ADD_TO_CART',
  payload: product,
});

const removeFromCart = product => ({
    type: 'REMOVE_FROM_CART',
    payload: product.id,
});

export { addToCart, removeFromCart, loadProducts };