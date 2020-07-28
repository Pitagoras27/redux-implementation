import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ProductList } from '../../components/ProductList';

configure({ adapter: new Adapter() });

it('renders not products when store is empty', () => {
  const wrapper = shallow(<ProductList products={[]} />);
  expect(wrapper.find('.product').length).toBe(0)
})