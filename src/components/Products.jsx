import React, {useState} from 'react'

import ProductItem from './ProductItem';

import styled from 'styled-components';
import { products } from '../data';


const Container = styled.div`
height: auto;
width: 100%;
display: flex;
padding: 30px;
justify-content: space-evenly;
text-align: center;
flex-wrap: wrap`;




const Products = ({cart, addCart}) => {

    // const [cart, setCart] = useState([]);

    // const addCart = (event) => {
    //      const id = event.target.id;
    //      setCart(cart.concat(id));
        
    // }

    // const showCart = () => {
    //     console.log(cart);
    //     console.log(cart.length);

    // }

    return (
        <Container >
            
              {products.map((product )=>(
                <>
                
                <ProductItem product={product} addCart={addCart} />
                </>
            ))}
       
        </Container>

    )
}

export default Products
