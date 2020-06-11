import React, { Component } from 'react';
// import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
import { removeToCart } from '../actionCreators'

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    }

    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart,
      })
    });
  }

  render() {
    return (
        <table>
          <tbody>
            {this.state.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right">
                  <button 
                    onClick={() => this.removeFromCart(product)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
    )
  }

  removeFromCart = product => store.dispatch(removeToCart(product));
}

export default ShoppingCart;
