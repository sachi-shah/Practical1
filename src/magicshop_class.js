// used class

import React, { Component } from "react";
class MagicShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Haunted Mirror", inventory: 1, price: 5.00 },
        { id: 2, name: "Mastering Magic: Madame Maude's Meanderings", inventory: 372, price: 17.50 },
        { id: 3, name: "Black Cat Shampoo", inventory: 127, price: 2.75 }
      ]};
  }
  updateInventory = id => {
    this.setState(prevState => ({
      products: prevState.products.map(product =>
        product.id === id
          ? { ...product, inventory: (product.inventory - 1) }
          : product )
    }));
  };
  render() {
    return (
      <main>
        <h1>Laramie's Magical Emporium</h1>
        <section>
          <h2>Goods for Sale</h2>
          {this.state.products.map(product => (
            <article key={product.id}>
              <h3>{product.name}</h3>
              Price: {product.price} € <br />
              {product.inventory} in stock <br />
              <button onClick={() => this.updateInventory(product.id)}>
                Buy
              </button>
            </article>
          ))}
        </section>
      </main>
    );}
}
export default MagicShop;