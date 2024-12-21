import React, { Component } from 'react';

class ItemList extends Component {
  state = {
    quantities: {},
  };

  handleQuantityChange = (itemId, operation) => {
    this.setState((prevState) => {
      const quantities = { ...prevState.quantities };
      const currentQuantity = quantities[itemId] || 0;

      if (operation === 'increment') {
        quantities[itemId] = currentQuantity + 1;
      } else if (operation === 'decrement' && currentQuantity > 0) {
        quantities[itemId] = currentQuantity - 1;
      }

      return { quantities };
    });
  };

  render() {
    const { items, addToCart } = this.props;
    const { quantities } = this.state;

    return (
      <div className="item-list">
        <h1>Items</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id} className="item">
              <img src={item.imageUrl} alt={item.name} className="item-image" />
              <span>{item.name}</span>
              <span>Rs.{item.price}</span>
            

              <div className="quantity-controls">
                <button
                  onClick={() => this.handleQuantityChange(item.id, 'decrement')}
                >
                  -
                </button>
                <span>{quantities[item.id] || 0}</span>
                <button
                  onClick={() => this.handleQuantityChange(item.id, 'increment')}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => {
                  const quantity = quantities[item.id] || 0;
                  if (quantity > 0) {
                    addToCart(item, quantity);
                  }
                }}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
