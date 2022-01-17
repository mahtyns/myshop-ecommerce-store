import React from 'react'
import { products } from '../data';
import styled from 'styled-components';
import { SingleItemAddedContainer, AddedToCartImage } from '../styling/userCartStyling';

const CartItemSingleAdded = ({ cart }) => {

    console.log(cart)

    return (
        <>
            {cart.map(cartItem => <>
                <SingleItemAddedContainer>
                    <AddedToCartImage src={products[cartItem].img} />
                    <div>
                        <p>{products[cartItem].name}</p>
                        <p>{products[cartItem].price} €</p>
                        <p>Delete</p>
                    </div>
                </SingleItemAddedContainer>

            </>)}
        </>
    )

}

export default CartItemSingleAdded
