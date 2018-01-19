import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.array,
    products: PropTypes.array,
    removeFromCart: PropTypes.func,
  };

  static defaultProps = {
    cart: [],
    products: [],
  };

  handleRemoveFromCart(productId, event) {
    event.preventDefault();
    const { removeFromCart } = this.props;
    removeFromCart && removeFromCart(productId);
  }

  render() {
    const {
      cart,
      products,
    } = this.props;
    const emptyCart = cart.length === 0;

    const cartProducts = cart.map((cartItem) => {
      const productData = products.find(p => cartItem.id === p.id);
      return (
        <Product
          key={productData.id}
          product={productData}
          isCartItem
        >
          <div className="Product-quantity">
            Qty: {cartItem.quantity}
          </div>
          <div className="Product-remove">
            <a
              href=""
              onClick={this.handleRemoveFromCart.bind(this, productData.id)}
            >
              remove
            </a>
          </div>
        </Product>
      );
    });

    return (
      <div className="Cart-container">
        <h2>Your Cart</h2>
        { emptyCart
          ? <p>Empty Cart</p>
          : cartProducts
        }
      </div>
    );
  }
}

export default Cart;
