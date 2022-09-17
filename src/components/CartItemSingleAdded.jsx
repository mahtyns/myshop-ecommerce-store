import React from 'react'
import PropTypes from 'prop-types';
import { products } from '../data';
import { SingleItemAddedContainer, AddedToCartImage, AddedToCartInformation, CartProductAuxiliaryText, CartProductName, CartProductPrice, AddRemoveCartProductButton } from '../styling/userCartStyling';
import { Delete, Add, Remove } from '@material-ui/icons';

const CartItemSingleAdded = ({ itemsAddedToCartList, deleteItemCart, addOneProductCart, removeOneProductCart }) => {

    return (
        <>{

            itemsAddedToCartList.map((addedCartItem) =>

                <SingleItemAddedContainer key={addedCartItem.name}>
                    <AddedToCartImage src={products[addedCartItem.id].img} />
                    <AddedToCartInformation>
                        <CartProductAuxiliaryText>Product Id: {addedCartItem.id}</CartProductAuxiliaryText>
                        <CartProductName>{products[addedCartItem.id].name}</CartProductName>
                        <CartProductPrice>{addedCartItem.price} €</CartProductPrice>
                        <CartProductAuxiliaryText>
                            <Add onClick={function () { addOneProductCart(addedCartItem) }} />
                            Amount: {addedCartItem.amount}
                            <Remove onClick={function () { removeOneProductCart(addedCartItem) }} />
                            <AddRemoveCartProductButton >
                                <Delete onClick={function () { deleteItemCart(addedCartItem) }} />
                            </AddRemoveCartProductButton>
                        </CartProductAuxiliaryText>
                    </AddedToCartInformation>
                </SingleItemAddedContainer>


            )

        }</>
    )

}

CartItemSingleAdded.propTypes = {
    itemsAddedToCartList: PropTypes.array,
    deleteItemCart: PropTypes.func,
    addOneProductCart: PropTypes.func,
    removeOneProductCart: PropTypes.func
}

export default CartItemSingleAdded
