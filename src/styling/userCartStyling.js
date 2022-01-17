import styledComponents from "styled-components";
import styled from "styled-components";


// General Cart
export const CartContainer = styled.div`
height: 90vh;
padding: 40px;
`;

export const CartWrapper = styled.div`
display: flex;
flex-direction: row;
`;

export const CartProductContainer = styled.div`
height: 400px;
flex: 3;
margin: 10px 20px`;

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
justify-content: center`;

export const TotalPriceSummary = styled.h1`
font-size: 30px;
margin: 15px 0`;

export const DeliveryOptionsContainer = styled.div`
background-color: rgb(249, 245, 240);
width: 100%;
padding: 10px 20px;
margin: 30px 0;
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


//Single Item Styling - Product Added to Cart
export const SingleItemAddedContainer = styled.div`
display: flex;
flex-direction: row;
width: 50vw;
padding: 10px 10px;
background-color: #f7ede2 `;

export const AddedToCartImage = styled.img`
width: 100px;
height: 100px;
object-fit: cover;
`;
