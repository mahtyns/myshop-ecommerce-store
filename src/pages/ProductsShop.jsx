import React, { useState } from 'react'
import Products from "../components/Products";
import styled from 'styled-components';
import { products } from '../data';

const Container = styled.div`
width: 100%`;



const ProductsShop = (props) => {

    

    
    return (
        <Container>
            <Products cartItems={props.cartItems} />
            {/* <div>
               {props.cartItems.map(prop => <p>{prop}</p> )} 
            </div> */}
        </Container>
    )
}

export default ProductsShop
