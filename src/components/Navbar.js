import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const { cartCount } = this.props;
    return (
      <nav className="navbar">
        <h1>Billing App</h1>
        <div className="cart-info">
          <span> Cart: {cartCount} items</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
