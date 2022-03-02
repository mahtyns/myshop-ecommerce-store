import React, { useState } from 'react'
import ProductItem from './ProductItem';
import { products } from '../data';
import { ProductsContainer } from '../styling/productShopStyling';

const Products = ({ addItemToCart, availableStock }) => {

    return (
        <ProductsContainer >
            {/* Map to create container for each product from the products array in data.js file */}
            {products.map((product, index) => (
                <ProductItem product={product} index={index} addItemToCart={addItemToCart} availableStock={availableStock} />
            ))}
        </ProductsContainer>

    )
}

export default Products
