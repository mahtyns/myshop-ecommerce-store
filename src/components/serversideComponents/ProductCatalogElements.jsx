import React from 'react'
import PropTypes from 'prop-types';
import { ProductsContainer } from '../../styling/productShopStyling';
import ProductCatalogSingleItem from './ProductCatalogSingleItem'

const ProductCatalogElements = ({ productCatalogList, addItemToCart}) => {
  return (
    <ProductsContainer>
      {productCatalogList.map((productFromCatalog) => 
        <ProductCatalogSingleItem key={productFromCatalog.product_id} productFromCatalog={productFromCatalog} addItemToCart={addItemToCart} />
      )}
    </ProductsContainer>
  )
}

ProductCatalogElements.propTypes = {
  productCatalogList: PropTypes.array,
  addItemToCart: PropTypes.func
}

export default ProductCatalogElements;