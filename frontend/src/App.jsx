import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
