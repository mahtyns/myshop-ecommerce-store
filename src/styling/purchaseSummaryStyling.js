import styledComponents from "styled-components";
import styled from "styled-components";

export const PurchaseCheckoutPageContainer = styled.div`
min-height: 90vh;
margin: 60px 0;
`;

export const CartCheckoutContainer = styled.div`
display: flex;
flex-direction: row;
width: 80%;
align-items: center;
justify-content: space-evenly;
margin: 40px auto`

export const TotalPriceSummaryContainer = styled.div`
background-color: rgb(249, 245, 240);
width: 700px;
height: auto`;

export const ConfirmPurchaseContainer = styled.div`
background-color: rgb(249, 245, 240);
width: 400px;
height: auto`;

export const PurchaseUserDataContainer = styled.div`
padding: 40px;
display: flex;
flex-direction: column;
justify-content: space-evenly`

export const PurchaseUserDataInput = styled.input`
background-color: rgba(255,255,255,0.7);
border: 1px solid rgba(0,0,0,0.4)`

export const PurchaseUserDataLabel = styled.label`
font-family: "Montserrat", sans-serif;
padding: 10px 0`

export const PurchaseItemsList = styled.p`
color: #818181;
font-family: "Montserrat", sans-serif;
padding: 5px 10px;
font-size: 14px`