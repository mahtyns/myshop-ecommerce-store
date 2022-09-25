import React from "react";
import HomeProductCategories from "../components/HomeProductCategories";
import NewsletterModule from "../components/NewsletterModule";
import PopularProductsModule from "../components/PopularProductsModule";
import Slider from "../components/Slider";
import PropTypes from 'prop-types';
import MainDescriptionModule from "../components/MainDescriptionModule";


const Home = ({ addItemToCart }) => {
  return (
    <>
      <Slider />
      <HomeProductCategories />
      <PopularProductsModule addItemToCart={addItemToCart}/>
      <MainDescriptionModule />
      <NewsletterModule/>
    </>
  );
};

Home.propTypes = {
addItemToCart: PropTypes.func
}

export default Home;