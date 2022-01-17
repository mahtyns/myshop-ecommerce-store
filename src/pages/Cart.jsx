import React from 'react'
import styled from 'styled-components'
import ProductsCart from '../components/ProductsCart';
import ShopSummary from '../components/ShopSummary';
import { SharedTitle } from '../styling/sharedStyling';
import { CartContainer, CartWrapper, CartProductContainer, CartSummaryContainer } from '../styling/userCartStyling';

const Cart = ({ cart, showCart, deleteCart }) => {
    return (
        <>
            <CartContainer>
                <SharedTitle>Your Cart</SharedTitle>
                <CartWrapper>
                    <CartProductContainer>
                        <ProductsCart cart={cart} showCart={showCart} deleteCart={deleteCart} />
                    </CartProductContainer>
                    <CartSummaryContainer>
                        <ShopSummary />
                    </CartSummaryContainer>
                </CartWrapper>
            </CartContainer>
        </>
    )
}

export default Cart
