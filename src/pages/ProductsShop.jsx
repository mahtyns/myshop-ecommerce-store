import React, { useState } from 'react'
import Products from "../components/Products";
import styled from 'styled-components';
import { products } from '../data';
import { ProductShopContainer } from '../styling/productShopStyling';


const ProductsShop = ({cart, addCart}) => {

    return (
        <ProductShopContainer>
            <Products cart={cart} addCart={addCart}  />
        </ProductShopContainer>
    )
}

export default ProductsShop
