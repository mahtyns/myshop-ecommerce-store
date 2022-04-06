import React from 'react';
import PropTypes from 'prop-types';
import { ProductDescr, ProductInfo, ProductItemContainer, ProductItemImage, ProductName, ProductPrice } from '../../styling/productShopStyling';

const ProductCatalogSingleItem = ({ productFromCatalog}) => {
  return (
    <ProductItemContainer>
      <ProductItemImage src='https://images.unsplash.com/photo-1610513320995-1ad4bbf25e55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
      <ProductInfo>
        <ProductName>{productFromCatalog.product_name}</ProductName>
        <ProductPrice>{productFromCatalog.product_price}</ProductPrice>
        <ProductDescr>{productFromCatalog.product_description}</ProductDescr>
      </ProductInfo>
    </ProductItemContainer>
  )
}
ProductCatalogSingleItem.propTypes = {
  productFromCatalog: PropTypes.object
}

export default ProductCatalogSingleItem;