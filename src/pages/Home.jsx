import React from "react";
import HomeProductCategories from "../components/HomeProductCategories";
import NewsletterModule from "../components/NewsletterModule";
import PopularProductsModule from "../components/PopularProductsModule";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <HomeProductCategories />
      <PopularProductsModule />
      <NewsletterModule/>
    </>
  );
};

export default Home;