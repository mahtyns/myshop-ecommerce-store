import React, { useState } from 'react'
import ProductItem from './ProductItem';
import { products } from '../data';
import { ProductsContainer } from '../styling/productShopStyling';

const Products = ({ addItemToCart, availableStock, searchTerm, sortingOptionList }) => {

    // Sorting options for the products
    if (sortingOptionList === "name") {
        const sortingByName = products.sort((prod1, prod2) => (prod1.name > prod2.name) ? 1 : -1)
        return (
            <ProductsContainer>
                {sortingByName.map((product, index) => <ProductItem product={product} index={index} addItemToCart={addItemToCart} availableStock={availableStock} />)}
            </ProductsContainer>
        )
    }

    else if (sortingOptionList === "price") {
        const sortingByPrice = products.sort((prod1, prod2) => (prod1.price > prod2.price) ? 1 : -1)
        return (
            <ProductsContainer>
                {sortingByPrice.map((product, index) => <ProductItem product={product} index={index} addItemToCart={addItemToCart} availableStock={availableStock} />)}
            </ProductsContainer>
        )

    }

    else if (sortingOptionList !== "name" && sortingOptionList !== "price") {
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
}

export default Products
