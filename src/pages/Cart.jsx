import React from 'react'
import styled from 'styled-components'
import ProductsCart from '../components/ProductsCart';
import ShopSummary from '../components/ShopSummary';
import { SharedSubtitle, SharedTitle } from '../styling/sharedStyling';
import { CartContainer, CartWrapper, CartProductContainer, CartSummaryContainer } from '../styling/userCartStyling';

const Cart = ({ itemsAddedToCartList, finalPriceCount }) => {
    return (
        <>
            <CartContainer>
                <SharedTitle>Your Cart Summary</SharedTitle>
                <CartWrapper>
                    <CartProductContainer>
                        <ProductsCart itemsAddedToCartList={itemsAddedToCartList} />
                    </CartProductContainer>
                    <CartSummaryContainer>
                        <ShopSummary finalPriceCount={finalPriceCount} />
                    </CartSummaryContainer>
                </CartWrapper>
            </CartContainer>
        </>
    )
}

export default Cart
