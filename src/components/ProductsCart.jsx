import CartItemSingleAdded from './CartItemSingleAdded';
import SingleCartProductElement from './serversideComponents/SingleCartProductElement';
import { SharedParagraph } from '../styling/sharedStyling';
import { CartProductsSummaryContainer, CartProductsSummaryItems } from '../styling/userCartStyling';
import React from 'react';
import PropTypes from 'prop-types';



const ProductsCart = ({ itemsAddedToCartList, deleteItemCart, addOneProductCart, removeOneProductCart }) => {

    return (
        <CartProductsSummaryContainer>
            <CartProductsSummaryItems>
                {itemsAddedToCartList.length ? <SingleCartProductElement
                    itemsAddedToCartList={itemsAddedToCartList}
                    // deleteItemCart={deleteItemCart}
                    // addOneProductCart={addOneProductCart}
                    // removeOneProductCart={removeOneProductCart}
                /> : <SharedParagraph>Your cart is empty</SharedParagraph>}
            </CartProductsSummaryItems>
        </CartProductsSummaryContainer>
    )
}

ProductsCart.propTypes = {
    itemsAddedToCartList: PropTypes.array,
    deleteItemCart: PropTypes.func,
    addOneProductCart: PropTypes.func,
    removeOneProductCart: PropTypes.func
}


export default ProductsCart
