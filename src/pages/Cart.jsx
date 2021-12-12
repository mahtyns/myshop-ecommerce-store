import React from 'react'
import Navbar from '../components/Navbar';
import styled from 'styled-components'
import Alert from '../components/Alert';
import Footer from '../components/Footer';
import ProductsCart from '../components/ProductsCart';
import ShopSummary from '../components/ShopSummary';

const Wrapper = styled.div`
height: 90vh;
padding: 40px;
`;
const Title = styled.div`
font-size:60px;
text-align: center
`;

const CartContainer = styled.div`
display: flex;
flex-direction: row;
`;

const ProductContainer = styled.div`
height: 400px;
flex: 3;
margin: 10px 20px`;

const Summary = styled.div`
flex: 1;

margin: 10px 20px`;

const Cart = () => {
    return (
        <>
        <Navbar/>
        <Alert/>
        <Wrapper>
            <Title>Your Cart</Title>
            <CartContainer>
            <ProductContainer>
                <ProductsCart/>
            </ProductContainer>
            <Summary>
                <ShopSummary/>
            </Summary>
            </CartContainer>

        </Wrapper>
        <Footer/>
        </>
    )
}

export default Cart
