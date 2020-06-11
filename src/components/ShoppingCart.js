import React, { Component } from 'react';
// import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';

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
                    bsSize="xsmall"
                    bsStyle="danger"
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

  removeFromCart(product) {

  }
}

export default ShoppingCart;
