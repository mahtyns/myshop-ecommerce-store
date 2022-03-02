import React, { useState } from 'react'
import ProductItem from './ProductItem';
import { products } from '../data';
import { ProductsContainer } from '../styling/productShopStyling';

const Products = ({ addItemToCart, availableStock, searchTerm, sortingOptionList }) => {

    const sortProductByChosenOption = (sortingOptionList) => {
        if (sortingOptionList === "name") {
            const sortedByName = products.sort((prod1, prod2) => {
                if (prod1.name < prod2.name) return -1;
                else return 1;
            })
        }
        else if (sortingOptionList === "price") {
            return
        }
        else return
    }

    return (
        <ProductsContainer >
            {/* Map to create container for each product from the products array in data.js file */}
            {products.filter((product) => {
                // Search by introducing the word in the input field
                if (searchTerm === '')
                    return <ProductItem product={product} addItemToCart={addItemToCart} availableStock={availableStock} />
                else if (product.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    return <ProductItem product={product} addItemToCart={addItemToCart} availableStock={availableStock} />
            }).map((product, index) => (
                <ProductItem product={product} index={index} addItemToCart={addItemToCart} availableStock={availableStock} />
            ))}
        </ProductsContainer>

    )
}

export default Products
