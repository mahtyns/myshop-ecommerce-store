import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { SharedParagraph, SharedTitle } from '../styling/sharedStyling';
import { ProductShopContainer } from '../styling/productShopStyling';
import ProductCatalogElements from '../components/serversideComponents/ProductCatalogElements';

const ProductsCatalogTest = ({ productCatalogList, addItemToCart}) => {

  

  return (
    <>
    <SharedTitle>Products Catalog</SharedTitle>
    <SharedParagraph>This page is built to test the connection to the server and shop database.</SharedParagraph>
    <ProductShopContainer>
        <ProductCatalogElements productCatalogList={productCatalogList} addItemToCart={addItemToCart}></ProductCatalogElements>
    </ProductShopContainer>
    </>
  )
}

ProductsCatalogTest.propTypes = {
  productCatalogList: PropTypes.array,
  addItemToCart: PropTypes.func
}

export default ProductsCatalogTest;