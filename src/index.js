import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadProducts } from './actionCreators';

import App from './App';
import './index.css';

store.dispatch(loadProducts());

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
