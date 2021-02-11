import React, { useEffect, useState } from "react";

const MagicShop = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://www.laramiesmagicalemporium.com/api/v1/products${
          query ? "?query=" + query : ""
        }`
      ).then(response => response.json());

      setProducts(data.results);
    };

    fetchData();
  }, [query]);

  const handleChange = event => setQuery(event.target.value);

  return (
    <main>
      <h1>Laramie's Magical Emporium</h1>

      <section>
        <h2>Goods for Sale</h2>

        <label htmlFor="product-search-query">Search</label>
        <input
          id="product-search-query"
          onChange={handleChange}
          value={query}
        />

        {products.map(product => (
          <article key={product.id}>
            <h3>{product.name}</h3>
            Price: {product.price} € <br />
            {product.inventory} in stock
          </article>
        ))}
      </section>
    </main>
  );
};

export default MagicShop;