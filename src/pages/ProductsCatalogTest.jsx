import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { SharedParagraph, SharedTitle } from '../styling/sharedStyling';
import { ProductShopContainer } from '../styling/productShopStyling';
import ProductCatalogElements from '../components/serversideComponents/ProductCatalogElements';

const ProductsCatalogTest = () => {

  const [productCatalogList, setProductCatalogList] = useState([]);



  return (
    <>
    <SharedTitle>Products Catalog</SharedTitle>
    <SharedParagraph>This page is built to test the connection to the server and shop database.</SharedParagraph>
    <ProductShopContainer>
      <ProductCatalogElements></ProductCatalogElements>
    </ProductShopContainer>
    </>
  )
}

export default ProductsCatalogTest;