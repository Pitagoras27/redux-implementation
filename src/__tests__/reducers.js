import { cart, products } from '../reducers';

describe('products', () => {
  it('returns the initial state', () => {
      expect(products(undefined, {})).toEqual([]);
  });

  it('receives products', () => {
      const productList = [
          { id:1, name: 'Product 1', price: 100, image: ''}
      ]

      expect(
          products([], { type: 'LOAD_PRODUCTS', payload: productList })
      ).toEqual(productList)
  })
})
