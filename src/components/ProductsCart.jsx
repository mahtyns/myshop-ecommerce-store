import styled from 'styled-components';
import { products } from '../data';
import { Delete } from '@material-ui/icons';
import {useState} from 'react';
import CartReturned from './CartReturned';

const Cart = styled.div`
display: flex;
flex-direction: column`

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 30px 40px;
`;

const Image = styled.img`
width: 200px;
height: 200px;
object-fit: cover`;

const Info = styled.div`
padding: 20px 20px;
color: gray;
`;

const Name = styled.h1`
font-size: 16px;`;

const Price = styled.h2`
font-size: 14px`;

const ProductsCart = ({cart, showCart, deleteCart, cartItem}) => {

const productContainer = <> <Image src={products[2].img}></Image>
           <Info>
               <Name>{products[2].name}</Name>
               <Price>Price: {products[2].price}€</Price>
               <Delete onClick={deleteCart}/>
           </Info> 
           </> 


    return (
        <Container>
            <Cart>
          {cart.length ? <CartReturned cart={cart} /> : <p>Your cart is empty</p>}
          <button onClick={showCart}>click</button>
          </Cart>
        </Container>
    )
}

export default ProductsCart
