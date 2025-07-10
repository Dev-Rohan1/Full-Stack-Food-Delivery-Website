import { Route, Routes, useNavigate } from "react-router-dom";
import AddItem from "./pages/AddItem";
import ListItems from "./pages/ListItems";
import Orders from "./pages/Orders";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/add");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/add" element={<AddItem />} />
        <Route path="/list-items" element={<ListItems />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
};

export default App;
