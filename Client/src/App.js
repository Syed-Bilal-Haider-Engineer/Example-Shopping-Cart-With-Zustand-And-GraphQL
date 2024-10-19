import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Auth/Login"
import './App.css';
import Header from "./Component/NavBar/Nav";
import Cart from "./Zustand/Cart/Cart";
import Checkout from "./Zustand/Checkout/Checkout";
import ProductList from "./Zustand/Products/ProductList";
import AllItemsDirectory from "./Component/ItemsDirectory/AllItemsDirectory";
import DirectoryDetails from "./Component/ItemsDirectory/ItemDetailsDirectory";
const App = () => {
  return (
    <Router>
      <div >
        <Header/>
        <div  style={{padding:"20px"}}>
            <Routes>
          <Route exact path="/" element={<ProductList/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/allItemDirectory" element={<AllItemsDirectory/>}/>
          <Route path="/details/:id" element={<DirectoryDetails />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
