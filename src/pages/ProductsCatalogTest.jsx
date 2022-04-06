import React, {useState} from 'react'
import PropTypes from 'prop-types';
import { SharedParagraph, SharedTitle } from '../styling/sharedStyling';
import { ProductShopContainer } from '../styling/productShopStyling';
import ProductCatalogElements from '../components/serversideComponents/ProductCatalogElements';

const ProductsCatalogTest = () => {

  const [productCatalogList, setProductCatalogList] = useState([]);

  const getProductsFromDB = async () => {
      try {
        const response = await fetch("http://localhost:5000/products", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const responseToJsonData = await response.json();

        setProductCatalogList(responseToJsonData);
        
      } catch (error) {
        console.error(error.message);
      }
  }

  console.log(productCatalogList)

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