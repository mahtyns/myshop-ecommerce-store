import React from 'react'
import { PopularProductsGeneralContainer } from '../styling/popularProductsStyling'
import { SharedTitle } from '../styling/sharedStyling'
import ProductItem from './ProductItem';
// import PropTypes from 'prop-types'
import { products } from '../data';

let productShowNumber = 4;
const chosenProducts = [];

const productSelection = () => {    
    for (let i = 0; i < productShowNumber; i++ ) {
        let productId = Math.floor(Math.random() * products.length);
        chosenProducts.push(productId)
    }
    console.log(chosenProducts)
}

const PopularProductsModule = () => {
  productSelection();  
  return (
    <PopularProductsGeneralContainer>
       <SharedTitle>Popular now</SharedTitle>

    </PopularProductsGeneralContainer>
  )
}

PopularProductsModule.propTypes = {}

export default PopularProductsModule