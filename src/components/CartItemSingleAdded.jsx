import React from 'react'
import { products } from '../data';
import styled from 'styled-components';
import { SingleItemAddedContainer, AddedToCartImage } from '../styling/userCartStyling';

const CartItemSingleAdded = ({ itemsAddedToCartList }) => {

    console.log(itemsAddedToCartList)

    return (
        <>
            {itemsAddedToCartList.map(cartItem => <>
                <SingleItemAddedContainer>
                    <AddedToCartImage src={products[itemsAddedToCartList.id].img} />
                    <div>
                        <p>{products[itemsAddedToCartList.id].name}</p>
                        <p>{products[itemsAddedToCartList.id].price} €</p>
                        <p>Delete</p>
                    </div>
                </SingleItemAddedContainer>

            </>)}
        </>
    )

}

export default CartItemSingleAdded
