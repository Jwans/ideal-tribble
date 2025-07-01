import React from "react";

export default function Order({ items, user, location }) {
  if (!user) return <div>Please sign in to order.</div>;
  if (!location) return <div>Location required.</div>;
  if (items.length === 0) return <div>No items ordered.</div>;

  return (
    <div>
      <h2>Your Order</h2>
      <ul>
        {items.map((p, idx) => (
          <li key={idx}>{p.name} - ${p.price}</li>
        ))}
      </ul>
      <div>
        <b>Name:</b> {user.displayName}<br/>
        <b>Email:</b> {user.email}<br/>
        <b>Location:</b> {location.lat.toFixed(3)}, {location.lng.toFixed(3)}
      </div>
      <button onClick={() => alert("Order placed!")}>Place Order</button>
    </div>
  );
}