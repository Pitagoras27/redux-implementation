import React from 'react';
import { shallow, configure, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
// import { ProductList } from '../../components/ProductList';
import ProductList from '../../components/ProductList';

configure({ adapter: new Adapter() });

// Test unitario a componente de forma aislada
// it('renders not products when store is empty', () => {
//   const wrapper = shallow(<ProductList products={[]} />);
//   expect(wrapper.find('.product').length).toBe(0)
// })

// Test unitario a componente conectado al store
const mockStore = configureStore();

it('renders not products when store is empty', () => {
  const store = mockStore({ products: [] });
  const wrapper = render(<ProductList store={store} />);
  expect(wrapper.find('.product').length).toBe(0)
})

it('renders products', () => {
  const store = mockStore({
      products: [{ id: 1, name: 'Hola Mundo', price: 100, image: ''}]
  });
  const wrapper = render(<ProductList store={store} />)
  expect(wrapper.find('.product').length).toBe(1);
})

it('adds a product to the shopping cart', () => {
  const store = mockStore({
      products: [{ id: 1, name: 'Hola Mundo', price: 100, image: '' }] 
  });

  const wrapper = mount(<ProductList store={store} />)
  wrapper.find('#product-1 button').simulate('click')

  const actions = store.getActions();
  expect(actions.length).toBe(1);
  expect(actions[0].type).toBe('ADD_TO_CART');
  expect(actions[0].product).not.toBeNull();    
})
