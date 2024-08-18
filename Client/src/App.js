import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Auth/Login"
import './App.css';
import Header from "./Component/NavBar/Nav";
import ProductList from "./Zustand/ProductList";
import Cart from "./Zustand/Cart";
import Checkout from "./Zustand/Checkout";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
