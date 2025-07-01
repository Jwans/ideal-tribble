import React, { useState } from "react";
import Auth from "./components/Auth";
import Location from "./components/Location";
import ProductList from "./components/ProductList";
import Order from "./components/Order";

function App() {
  const [user, setUser] = useState(null);
  const [location, setLocation] = useState(null);
  const [orderItems, setOrderItems] = useState([]);

  const handleAddProduct = (prod) => setOrderItems((prev) => [...prev, prod]);

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>Mall Ordering App</h1>
      <Auth setUser={setUser} />
      <Location setLocation={setLocation} />
      <ProductList onAdd={handleAddProduct} />
      <Order items={orderItems} user={user} location={location} />
    </div>
  );
}

export default App;