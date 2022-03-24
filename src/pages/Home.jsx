import React from "react";
import HomeProductCategories from "../components/HomeProductCategories";
import NewsletterModule from "../components/NewsletterModule";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <HomeProductCategories />
      <NewsletterModule></NewsletterModule>
    </>
  );
};

export default Home;