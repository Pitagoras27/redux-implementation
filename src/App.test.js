import React from 'react';
import { shallow, configure, render } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import store from './store';
import ProductList from './components/ProductList';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />)
 });

// it('renders ul elements list', () => {
// 	render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
// });
