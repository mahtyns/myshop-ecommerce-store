import React from 'react'
import { products } from '../data';
import ProductsCart from './ProductsCart';
import styled from 'styled-components';

const Image = styled.img`
width: 100px;
height: 100px;
object-fit: cover;
`;

const Container = styled.div`
display: flex;
flex-direction: row;
width: 50vw;
padding: 10px 10px;
background-color: #f7ede2 `;


const CartReturned = ({cart}) => {
   
    console.log(cart)

    return (
        <>
        {cart.map(cartItem => <>
        <Container>
        <Image src={products[cartItem].img} />
        <div>
        <p>{products[cartItem].name}</p>
        <p>{products[cartItem].price} €</p>
        <p>Delete</p>
        </div>
</Container>

        </> )}
        </>
    )

}

export default CartReturned
