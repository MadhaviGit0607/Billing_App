import React, { Component } from 'react';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import items from "./data/items"
import "./styles.css"


class App extends Component {
  state = {
    items:items,
    cart: [],
  };

  addToCart = (item) => {
    this.setState((prevState) => {
      const cartItem = prevState.cart.find((cartItem) => cartItem.id === item.id);
      if (cartItem) {
        return {
          cart: prevState.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          cart: [...prevState.cart, { ...item, quantity: 1 }],
        };
      }
    });
  };

  render() {
    return (
      <div>
        <Navbar cartCount={this.state.cart.length} />
        <div className="container">
          <ItemList items={this.state.items} addToCart={this.addToCart} />
          <Cart cart={this.state.cart} />
        </div>
      </div>
    );
  }
}

export default App;
