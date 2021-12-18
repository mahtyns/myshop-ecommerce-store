import React from "react";

import Navbar from "../components/Navbar";
import Alert from "../components/Alert";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    
      <Slider />
      <Products />
      <Footer/>
    </>
  );
};

export default Home;