import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { products } from "../data";


const Home = () => {
  return (
    <>
      <Slider />
      <Products />
      
    </>
  );
};

export default Home;