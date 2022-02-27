import React from 'react'
import styled from 'styled-components'
import ProductsCart from '../components/ProductsCart';
import ShopSummary from '../components/ShopSummary';
import { SharedSubtitle, SharedTitle } from '../styling/sharedStyling';
import { CartContainer, CartWrapper, CartProductContainer, CartSummaryContainer } from '../styling/userCartStyling';

const Cart = ({ itemsAddedToCartList, finalPriceCount, deleteItemCart, addOneProductCart, removeOneProductCart, chooseDeliveryOption }) => {
    return (
        <>
            <CartContainer>
                <SharedTitle>Your Cart Summary</SharedTitle>
                <CartWrapper>
                    <CartProductContainer>
                        <ProductsCart itemsAddedToCartList={itemsAddedToCartList} deleteItemCart={deleteItemCart} addOneProductCart={addOneProductCart} removeOneProductCart={removeOneProductCart} />
                    </CartProductContainer>
                    <CartSummaryContainer>
                        <ShopSummary finalPriceCount={finalPriceCount} chooseDeliveryOption={chooseDeliveryOption} />
                    </CartSummaryContainer>
                </CartWrapper>
            </CartContainer>chooseDeliveryOption
        </>
    )
}

export default Cart
