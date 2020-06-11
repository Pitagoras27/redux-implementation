import React, { Component } from 'react';
// import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <a href="#">Ecommerce</a>
        <section>
          <ProductList />
        </section>
        <section>
          <ShoppingCart />
        </section>
      </div>
    );
  }
}

export default App;
