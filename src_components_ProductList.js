import React from "react";

const products = [
  { id: 1, name: "Shoes", price: 50 },
  { id: 2, name: "T-shirt", price: 20 },
  { id: 3, name: "Bag", price: 80 }
];

export default function ProductList({ onAdd }) {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => onAdd(p)}>Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
}