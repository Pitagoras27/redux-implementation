const loadProducts = () => ({
  type: 'LOAD_PRODUCTS',
  payload: [
    { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
    { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
    { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
  ],
});

const addToCart = product => ({ 
  type: 'ADD_TO_CART',
  payload: product,
});

const removeFromCart = product => ({
    type: 'REMOVE_FROM_CART',
    payload: product.id,
});

export { addToCart, removeFromCart, loadProducts };