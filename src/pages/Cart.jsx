import React from 'react'
import ProductsCart from '../components/ProductsCart';
import ShopSummary from '../components/ShopSummary';
import { SharedTitle } from '../styling/sharedStyling';
import { CartContainer, CartWrapper, CartProductContainer, CartSummaryContainer } from '../styling/userCartStyling';
import PropTypes from 'prop-types';


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
            </CartContainer>
        </>
    )
}

Cart.propTypes = {
    finalPriceCount: PropTypes.number,
    chooseDeliveryOption: PropTypes.func,
    itemsAddedToCartList: PropTypes.array,
    deleteItemCart: PropTypes.func, 
    addOneProductCart: PropTypes.func, 
    removeOneProductCart: PropTypes.func
}


export default Cart
