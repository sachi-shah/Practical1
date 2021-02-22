import React, { useState } from "react";
const MagicShop = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Milk", Quantity: 10, price: 25.00},
    { id: 2, name: "Biscuits", Quantity: 15, price: 17.50  },
    { id: 3, name: "Fruit juices", Quantity: 12, price: 12.75  }
  ]);
  const updateQuantity = id => {
    setProducts(
      products.map(product => 
        product.id === id
          ? { ...product, Quantity: (product.Quantity - 1) }
          : product
      ) );
  };
  return (
    <main>
      <h1>Shopping List</h1>
      <section>
        <h2>Goods for Sale</h2> <br/>
        {products.map(product => (
          <article key={product.id}>
            <h3>{product.name}</h3>
            Price: {product.price} € <br />
            {product.Quantity} in stock <br />
            <button onClick={() => updateQuantity(product.id)}>Buy</button>
          </article>
        ))}
      </section>
    </main>
  ); };
export default MagicShop;

