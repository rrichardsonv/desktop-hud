import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

class ProductList extends PureComponent {
  static propTypes = {
    addToCart: PropTypes.func,
    products: PropTypes.array,
  };

  static defaultProps = {
    products: [],
  };

  handleAddToCart(productId, event) {
    event.preventDefault();
    const { addToCart } = this.props;
    addToCart && addToCart(productId);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <h2>Our Products</h2>
        {products.map(product => {
          return (
            <Product
              key={product.id}
              product={product}
            >
              <a href=""
                className="btn"
                onClick={this.handleAddToCart.bind(this, product.id)}
              >
                Add To Cart
              </a>
            </Product>
          )
        })}
      </div>
    );
  }
};

export default ProductList;
