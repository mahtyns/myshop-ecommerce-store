import React, { useState } from 'react'
import Products from "../components/Products";
import styled from 'styled-components';
import { products } from '../data';

const Container = styled.div`
width: 100%`;



const ProductsShop = ({cart, addCart, showCart}) => {

//    const [cart, setCart] = useState([]);

//     const addCart = (event) => {
//          const id = event.target.id;
//          setCart(cart.concat(id));
        
//     }

//     const showCart = () => {
//         console.log(cart);
//         console.log(cart.length);

//     }
    

    return (
        <Container>
            <Products cart={cart} addCart={addCart} showCart={showCart} />
           
        </Container>
    )
}

export default ProductsShop
