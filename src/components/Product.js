import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlimProduct from './SlimProduct';

class Product extends Component {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
    isCartItem: PropTypes.bool,
    children: PropTypes.any,
  };
  constructor(props){
    super(props)

    this.handleMinimizeClick = this.handleMinimizeClick.bind(this);
    this.state = {
      minimized: false
    }
  }
  handleMinimizeClick (event) {
    event.preventDefault();
    const newState = !this.state.minimized;
    this.setState({ minimized: newState });
  }
  render() {
    const { product, children, isCartItem } = this.props;
    const {
      name,
      description,
      image,
      price,
    } = product;

    if (this.state.minimized) {
      return (
        <SlimProduct
          product={product}
          handleMaximizeClick={this.handleMinimizeClick}
          children={children}
        />
      )
    }

    let klassName = isCartItem ? 'CartItem' : 'Product';
    return(
      <div className={`${klassName}`}>
        <div className={`${klassName}-media`}>
          <div className={`${klassName}-image`}>
            <img src={image} alt={name} title={name} />
          </div>
        </div>
        <div className={`${klassName}-left`}>
          <div className={`${klassName}-name`}>
            {name}
          </div>
          <div className={`${klassName}-description`}>
            {description}
          </div>
        </div>
        <div className={`${klassName}-right`}>
          <div className={`${klassName}-price`}>
            {`$${price.toFixed(2)}`}
          </div>
          <div className={`${klassName}-action`}>
            {children}
          </div>
        </div>
        {isCartItem && <div className="minwrap"><img
          onClick={this.handleMinimizeClick}
          src={`${process.env.PUBLIC_URL}/icn-up.svg`}
        /></div>}
      </div>
    );
  }
};

export default Product;
