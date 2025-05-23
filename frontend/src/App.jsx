import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PlaceOrder from "./pages/PlaceOrder";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AppLayout from "./layout/AppLayout";
import Footer from "./pages/Footer";

const App = () => {
  const [loginState, setLoginState] = useState(false);

  return (
    <>
      <AppLayout>
        {loginState && <Login setLoginState={setLoginState} />}
        <Navbar setLoginState={setLoginState} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </AppLayout>
      <Footer />
    </>
  );
};

export default App;
