import React from 'react'
import { products } from '../data';
import styled from 'styled-components';
import { SingleItemAddedContainer, AddedToCartImage, AddedToCartInformation, CartProductAuxiliaryText, CartProductName, CartProductPrice, AddRemoveCartProductButton } from '../styling/userCartStyling';
import { Delete } from '@material-ui/icons';

const CartItemSingleAdded = ({ itemsAddedToCartList }) => {

    return (
        <>
            {itemsAddedToCartList.map((addedCartItem, itemIndex) =>
                <SingleItemAddedContainer>
                    <AddedToCartImage src={products[addedCartItem.id].img} />
                    <AddedToCartInformation>
                        <CartProductAuxiliaryText>Product Id: {addedCartItem.id}</CartProductAuxiliaryText>
                        <CartProductName>{products[addedCartItem.id].name}</CartProductName>
                        <CartProductPrice>{addedCartItem.price} €</CartProductPrice>
                        <CartProductAuxiliaryText>Amount: 1 <AddRemoveCartProductButton><Delete /></AddRemoveCartProductButton></CartProductAuxiliaryText>
                    </AddedToCartInformation>
                </SingleItemAddedContainer>
            )}
        </>
    )

}

export default CartItemSingleAdded
