import React, {useEffect} from 'react'
import { PopularProductDescr, PopularProductGalleryContainer, PopularProductImage, PopularProductPrice, PopularProductsGeneralContainer, PopularProductSingleItem, PopularProductTitle } from '../styling/popularProductsStyling'
import { SharedCTAButton, SharedTitle } from '../styling/sharedStyling'
import PropTypes from 'prop-types'
import { products } from '../data';


let productShowNumber = 4;
const chosenProducts = [];

const productSelection = () => {    
    for (let i = 0; i < productShowNumber; i++ ) {
        let productId = Math.floor(Math.random() * products.length);
        chosenProducts.push(productId);
    }
}

const PopularProductsModule = ({ addItemToCart }) => {
  
  if (chosenProducts.length !== productShowNumber) productSelection();

  return (
    <PopularProductsGeneralContainer>
       <SharedTitle>Popular now</SharedTitle>
       <PopularProductGalleryContainer>
        {chosenProducts.map(prodId => 
        <PopularProductSingleItem key={prodId}>
            <PopularProductImage src={products[prodId].img}/>
            <PopularProductTitle>{products[prodId].name}</PopularProductTitle>
            <PopularProductPrice>{products[prodId].price}€</PopularProductPrice>
            <PopularProductDescr>{products[prodId].text}</PopularProductDescr>
            <SharedCTAButton onClick={() => addItemToCart(products[prodId])}>Add to Cart</SharedCTAButton>
        </PopularProductSingleItem>
        )}
          </PopularProductGalleryContainer>
    </PopularProductsGeneralContainer>
  )
}

PopularProductsModule.propTypes = {
    addItemToCart: PropTypes.func
}

export default PopularProductsModule