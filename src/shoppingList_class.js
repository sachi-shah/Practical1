import React, { Component } from "react";

class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Milk", Quantity: 10},
        { id: 2, name: "Biscuits", Quantity: 15 },
        { id: 3, name: "Fruit juices", Quantity: 12 }
      ]
    };
  }
  updateInventory = id => {
    this.setState(prevState => ({
      products: prevState.products.map(product =>
        product.id === id
          ? { ...product, Quantity: (product.Quantity - 1) }
          : product
      )
    }));
  };
  render() {
    return (
      <main>
        <h1>Shopping List</h1>
        <section>
          {this.state.products.map(product => (
            <article key={product.id}>
              <h3>{product.name}</h3>
              {product.Quantity} in stock <br />
              <button onClick={() => this.updateInventory(product.id)}>Buy</button>
            </article>
          ))}
        </section>
      </main>
    );
  }
}
export default Shopping;