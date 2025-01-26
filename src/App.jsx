import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Details";
import Dashboard from "./Dashboard";

function App() {
  const [cartItems, setCartItems] = useState([]); // Cart items state

  // Add to Cart Function
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); // Add product to cart
  };

  return (
    <Router>
      <Routes>
        {/* Details Page */}
        <Route path="/details/:id" element={<Details addToCart={handleAddToCart} />} />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
