import React, { useState } from 'react'
import styled from 'styled-components'
import Home from '../pages/Home';
import Form from '../pages/Form';
import ProductsShop from '../pages/ProductsShop';
import { Search } from '@material-ui/icons';
import { ShoppingCartSharp } from '@material-ui/icons';
import { PersonSharp } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import {

  Routes,
  Route,
  Link
} from "react-router-dom";



const Container = styled.div`
height: 60px;
background-color: #f5cac3;
width: 100%`;

const Wrapper = styled.div`
padding: 0px 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
text-align: center`;

const Logo = styled.div`
flex:1;
font-family: 'MonteCarlo', cursive;
font-size: 2rem`;

const Navigation = styled.div`
flex:1;`;

const CartOptions = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: space-evenly;
cursor:pointer;`;


const SearchDiv = styled.div`
width: 65%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid white;
background-color: rgb(255,255,255,0.2);
border-radius:5px
`;

const Input = styled.input`
background: none;
border: none;
width: 100%;
 &:focus {
        outline: none;
      
    }`;

const NavList = styled.ul`
display: flex;
list-style: none;
`;

const LiItem = styled.li`
padding: 0px 10px;
cursor: pointer;

&:hover {
    color: white;
};
&:visited { text-decoration: none; }`;

export const cartItems = [];

const Navbar = () => {

   const [items, setItems] = useState(cartItems.length);
    

    return (
        <Container>
            <Wrapper>
          <Navigation>
              <NavList>
         

                  <LiItem><Link to="/about">About</Link></LiItem>
                  <LiItem><Link to="/products">Products</Link></LiItem>
                  <LiItem ><Link to="/contact">Contact</Link></LiItem>

                  
              </NavList>
              </Navigation>
           <Logo><Link to="/">MyShop</Link></Logo>
          <CartOptions>
              <SearchDiv>
               <Input/>
              <Search style={{color: "gray"}}/>
              </SearchDiv>
              <PersonSharp/>
              <Badge badgeContent={items} color="secondary" max={10} >
                  <Link to="/cart">
              <ShoppingCartSharp/>
              </Link>
              </Badge>
              </CartOptions>
          </Wrapper>
      
        </Container>
       
 
    )
}

export default Navbar
