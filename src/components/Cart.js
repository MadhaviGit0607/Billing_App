import React, { Component } from 'react';

class Cart extends Component {
  calculateTotal = () => {
    return this.props.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  handleCheckout = () => {
    alert('Thank you for Shopping with us !!...');
  };

  render() {
    const { cart } = this.props;
    return (
      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: Rs.{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
        <h1>Total Amount: Rs.{this.calculateTotal()}</h1>
        <button onClick={this.handleCheckout} className="btn btn-primary">
          Checkout
        </button>
      </div>
    );
  }
}

export default Cart;
