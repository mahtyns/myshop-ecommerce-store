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

    const showProps = () => {
        console.log(props.cartItems)
        console.log(newProducts)
    }

    const newProducts = [...products]

    return (
        <Container >
            
              {products.map((product, i)=>(
                <>
                <ProductItem {...props} product={product} key={i}   />
                </>
            ))}
           <button onClick={showProps}>CLick</button>
        </Container>

    )
}

export default Products
