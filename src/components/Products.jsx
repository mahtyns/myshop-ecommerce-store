import React, {useState} from 'react'

import ProductItem from './ProductItem';

import styled from 'styled-components';
import { products } from '../data';


const Container = styled.div`
height: auto;
width: 100%;
display: flex;
padding: 30px;
justify-content: space-evenly;
text-align: center;
flex-wrap: wrap`;




const Products = (props) => {



    return (
        <Container>
            
            {products.map((product, props)=>(
                <>
                <ProductItem product={product} cartItems={props.cartItems}/>
                </>
            ))}
            
        </Container>

    )
}

export default Products
