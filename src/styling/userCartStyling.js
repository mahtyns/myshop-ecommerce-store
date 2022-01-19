import styledComponents from "styled-components";
import styled from "styled-components";


// General Cart
export const CartContainer = styled.div`
height: auto;
min-height: 90vh;
padding: 40px;
`;

export const CartWrapper = styled.div`
display: flex;
flex-direction: row;
`;

export const CartProductContainer = styled.div`
height: auto;
flex: 3;
margin: 10px 20px;
display: flex;
flex-direction: column;
align-items: left;
justify-content: center`;

export const CartSummaryContainer = styled.div`
flex: 1;
margin: 10px 20px`;

// Cart Summary

export const SummaryTotalContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

export const PaySummary = styled.div`
background-color: rgb(249, 245, 240);
width: 100%;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 40px 0;
padding: 20px 0`;

export const TotalPriceSummary = styled.h1`
font-size: 30px;
padding: 30px 0`;

export const DeliveryOptionsContainer = styled.div`
background-color: rgb(249, 245, 240);
width: 100%;
padding: 10px 20px;
margin: 20px 0;
`;

export const SummaryBuyButton = styled.button`
background-color: black;
color: white;
padding: 10px 80px;
font-size: 20px;
border: none;
margin: 10px 0;
`;

export const TotalSummaryInfo = styled.p`
font-size: 16px;
color: gray;
padding: 15px 25px;`;

// Container for all the products added to cart

export const CartProductsSummaryContainer = styled.div`
display: flex;
flex-direction: row;
padding: 30px 40px;
`;

export const CartProductsSummaryItems = styled.div`
display: flex;
flex-direction: column`


//Single Item Styling - Product Added to Cart
export const SingleItemAddedContainer = styled.div`
display: flex;
flex-direction: row;
width: auto;
padding: 10px 10px;
margin: 10px 0px;
background-color: #fafafa;
align-items: flex-start;`;

export const AddedToCartImage = styled.img`
width: 130px;
height: 130px;
object-fit: cover;
padding: 5px;

`;

export const AddedToCartInformation = styled.div`
display: flex;
flex-direction: column;
padding: 5px 20px;
`;


export const CartProductAuxiliaryText = styled.h3`
color: #9d9d9d;
font-size: 14px;
padding: 0`;

export const CartProductName = styled.h1`
font-size: 30px;
padding: 4px 0`;

export const CartProductPrice = styled.h3`
color: #827b6e;
font-size: 26px;
padding-bottom: 6px`;

export const AddRemoveCartProductButton = styled.button`
display: inline;
border: none;
border-radius: 25px;
font-size: 16px;
background-color: white;
margin: 0px 20px;
`;
