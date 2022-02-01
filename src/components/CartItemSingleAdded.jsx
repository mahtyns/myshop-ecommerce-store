import React from 'react'
import { products } from '../data';
import { SingleItemAddedContainer, AddedToCartImage, AddedToCartInformation, CartProductAuxiliaryText, CartProductName, CartProductPrice, AddRemoveCartProductButton } from '../styling/userCartStyling';
import { Delete } from '@material-ui/icons';

const CartItemSingleAdded = ({ itemsAddedToCartList, deleteItemCart }) => {



    return (
        <>{

            itemsAddedToCartList.map((addedCartItem) =>

                <SingleItemAddedContainer>
                    <AddedToCartImage src={products[addedCartItem.id].img} />
                    <AddedToCartInformation>
                        <CartProductAuxiliaryText>Product Id: {addedCartItem.id}</CartProductAuxiliaryText>
                        <CartProductName>{products[addedCartItem.id].name}</CartProductName>
                        <CartProductPrice>{addedCartItem.price} €</CartProductPrice>
                        <CartProductAuxiliaryText>Amount: {addedCartItem.amount} <AddRemoveCartProductButton onClick={function () { deleteItemCart(addedCartItem.id) }}><Delete /></AddRemoveCartProductButton></CartProductAuxiliaryText>
                    </AddedToCartInformation>
                </SingleItemAddedContainer>


            )

        }</>
    )

}

export default CartItemSingleAdded
