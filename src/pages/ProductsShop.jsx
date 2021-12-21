import React from 'react'
import Products from "../components/Products";
import styled from 'styled-components';
import { products } from '../data';

const Container = styled.div`
width: 100%`;



const ProductsShop = () => {
    return (
        <Container>
            <Products />
        </Container>
    )
}

export default ProductsShop
