import React from 'react'
import PropTypes from 'prop-types';
import { ProductsContainer } from '../../styling/productShopStyling';
import ProductCatalogSingleItem from './ProductCatalogSingleItem'

const ProductCatalogElements = ({ productCatalogList}) => {
  return (
    <ProductsContainer>
      {productCatalogList.map((productFromCatalog) => 
        <ProductCatalogSingleItem key={productFromCatalog.product_id} productFromCatalog={productFromCatalog} />
      )}
    </ProductsContainer>
  )
}

ProductCatalogElements.propTypes = {
  productCatalogList: PropTypes.array
}

export default ProductCatalogElements;