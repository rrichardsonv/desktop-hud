import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SlimProduct extends Component {
  static propTypes = {
    product: PropTypes.object,
    handleMaximizeClick: PropTypes.func,
    children: PropTypes.array,
  }
  render() {
    const { image, name, price } = this.props.product;
    return (
      <div className="SlimProduct">
        <div className="SlimProduct-image">
          <img src={image} alt={name} title={name} />
        </div>
        <div className="SlimProduct-deets">
          <div className="SlimProduct-name">
            {name}
          </div>
          <div className="SlimProduct-price">
            {`$${price.toFixed(2)}`}
          </div>
        </div>
        <div className="minwrap">
          <img
            onClick={this.props.handleMaximizeClick}
            src={`${process.env.PUBLIC_URL}/icn-down.svg`}
          />
        </div>
        <div className="restOfTheOwl">
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default SlimProduct;
