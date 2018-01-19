import React, { Component } from 'react';

import './App.css';

import Cart from './Cart';
import ProductList from './ProductList';

const productData = require('../products.json');

class App extends Component {

  constructor() {
    super()
    this.state = { cart: [] };
  }

  handleAddToCart (productId) {
    const { cart } = this.state;
    const existingProduct = cart.find(product => product.id === productId);
    const otherProducts = cart.filter(product => product.id !== productId);

    const newQuantity = existingProduct
      ? existingProduct.quantity + 1
      : 1;

    const newProduct = { id: productId, quantity: newQuantity };

    this.setState({ cart: [newProduct, ...otherProducts]});
  }

  handleRemoveFromCart (productId) {
    const { cart } = this.state;
    const remainingProducts = cart.filter(product => product.id !== productId);

    this.setState({ cart: remainingProducts });
  }

  render() {
    const { cart } = this.state;

    return (
      <div className="App">
        <div className="App-column">
          <ProductList
            products={productData}
            addToCart={this.handleAddToCart.bind(this)}
          />
        </div>
        <div className="App-column">
          <Cart
            products={productData}
            cart={cart}
            removeFromCart={this.handleRemoveFromCart.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
