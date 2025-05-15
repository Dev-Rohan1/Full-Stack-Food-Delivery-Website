import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PlaceOrder from "./pages/PlaceOrder";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<PlaceOrder />} />
    </Routes>
  );
};

export default App;
