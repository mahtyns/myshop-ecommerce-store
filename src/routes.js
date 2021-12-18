import React from "react";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Form from "./pages/Form";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/home" component={<Home />} />

        <Route exact path="/cart" component={<Cart />} />
        <Route exact path="/about" component={<Form />} />
      </Routes>
    </>
  );
};
