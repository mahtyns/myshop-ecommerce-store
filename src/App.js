import React, { useState } from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Form from "./pages/Form";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

import { Routes } from "react-router";
import { Route } from "react-router";
import ProductsShop from "./pages/ProductsShop";

import { products } from "./data";

const App = () => {
  const [cart, setCart] = useState([]);
  // const [stock, setStock] = useState(products.stock);

  const addCart = (event) => {
    const id = event.target.id;
    setCart(cart.concat(id));
  };

  const showCart = () => {
    console.log(cart);
    console.log(cart.length);
  };

  const deleteCart = () => {
    console.log("oki");
  };

  return (
    <>
      <Router>
        <Navbar cart={cart} />
        <Alert />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} showCart={showCart} deleteCart={deleteCart} />
            }
          />
          <Route path="/contact" element={<Form />} />
          <Route
            path="/products"
            element={
              <ProductsShop cart={cart} addCart={addCart} showCart={showCart} />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
