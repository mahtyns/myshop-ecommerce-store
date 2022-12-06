import React from 'react'
import PropTypes from 'prop-types';

import { useParams } from "react-router-dom";
import { products } from '../data';
import { SharedSecondaryText, SharedSubtitle, SharedTitle } from '../styling/sharedStyling';
import { MainProductContainer, ProductInfoWrapper, ProductMainPhoto, ProductDetailsWrapper, SingleProductPrice, SingleProductPriceText, SingleProductPriceWrapper, SingleProductDescription, SingleProductCategory, AddToCartSingleButton } from '../styling/singleProductPageStyling';

const ProductSinglePage = ({ addItemToCart }) => {

  const { productId } = useParams();
  
  const productDisplayed = products.find( product => product.name === productId );
  console.log(productDisplayed)

  return (
   <MainProductContainer>
        <SharedTitle>{productDisplayed.name}</SharedTitle>
        <ProductInfoWrapper>
            <ProductMainPhoto src={productDisplayed.img} alt={productDisplayed.name}/>
            <ProductDetailsWrapper>
                <SharedSubtitle>{productDisplayed.text}</SharedSubtitle>
                  <SharedSecondaryText>Category: <SingleProductCategory>{productDisplayed.category}</SingleProductCategory></SharedSecondaryText>
                  <SingleProductDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae expedita voluptas cumque illum exercitationem necessitatibus corrupti iste et vel veniam beatae molestiae omnis, magni perspiciatis molestias consequatur! Commodi, provident earum.</SingleProductDescription>
                <SingleProductPriceWrapper>
                    <SingleProductPriceText>Price:</SingleProductPriceText>
                    <SingleProductPrice>{productDisplayed.price} €</SingleProductPrice>
                </SingleProductPriceWrapper>
                  <AddToCartSingleButton onClick={()=>addItemToCart(productDisplayed)}>Add To cart</AddToCartSingleButton>
            </ProductDetailsWrapper>
        </ProductInfoWrapper>
   </MainProductContainer>
  )
}

ProductSinglePage.propTypes = {
    addItemToCart: PropTypes.func
}


export default ProductSinglePage