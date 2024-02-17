import React from "react";

function Products() {
  const products = [
    { id: 1, name: "Ürün 1", price: 50 },
    { id: 2, name: "Ürün 2", price: 70 },
    { id: 3, name: "Ürün 3", price: 100 },
    { id: 4, name: "Ürün 4", price: 120 },
    { id: 5, name: "Ürün 5", price: 90 },
  ];

  return (
    <div>
      <h2>Ürünler</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Fiyat: {product.price} TL</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
