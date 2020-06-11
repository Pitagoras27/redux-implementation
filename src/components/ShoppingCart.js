import React from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from '../actionCreators'

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


const ShoppingCart = ({cart, removeToCart}) => {
  return (
      <table>
        <tbody>
          {cart.map(product =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="text-right">${product.price}</td>
              <td className="text-right">
                <button 
                  onClick={() => removeToCart(product)}
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
              Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  removeToCart(product) {
    dispatch(removeFromCart(product))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
