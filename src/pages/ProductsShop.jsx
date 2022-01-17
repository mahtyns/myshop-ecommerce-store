import React, { useState } from 'react'
import Products from "../components/Products";
import styled from 'styled-components';
import { products } from '../data';
import { ProductShopContainer } from '../styling/productShopStyling';
import { SharedParagraph, SharedTitle } from '../styling/sharedStyling';


const ProductsShop = ({ cart, addCart }) => {

    return (
        <>
            <SharedTitle>Our Shop</SharedTitle>
            <SharedParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus asperiores placeat laborum culpa tempore, optio rerum molestias! Accusantium, dolor tempore.
            </SharedParagraph>

            <ProductShopContainer>
                <Products cart={cart} addCart={addCart} />
            </ProductShopContainer>
        </>
    )
}

export default ProductsShop
