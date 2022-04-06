import React from 'react'
import PropTypes from 'prop-types';
import { ProductsContainer } from '../../styling/productShopStyling';
import ProductCatalogSingleItem from './ProductCatalogSingleItem'

const ProductCatalogElements = () => {
  return (
    <ProductsContainer>
      <ProductCatalogSingleItem />
    </ProductsContainer>
  )
}

export default ProductCatalogElements;