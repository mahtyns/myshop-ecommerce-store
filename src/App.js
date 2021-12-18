import React from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Form from "./pages/Form";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from "react-router";
import { Route } from "react-router";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
