import styled from "styled-components";

export const MainProductContainer = styled.div`
width: 100%;
padding: 2rem;
`;

export const ProductInfoWrapper = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: stretch;
padding: 2rem;
margin: 0 auto;
`;

export const ProductMainPhoto = styled.img`
width: 600px;
height: 800px;
object-fit: cover
`

export const ProductDetailsWrapper = styled.div`
width: 50%;
padding: 2rem;
`

export const SingleProductPriceText = styled.div`
color:#827b6e;
font-size: 2rem;
padding: .5rem 1rem .5rem 0
`

export const SingleProductPrice = styled.div`
color:#827b6e;
letter-spacing: 0;
font-weight: 700;
font-size: 4rem;
`

export const SingleProductPriceWrapper = styled.div`
display: flex;
flex-direction:row;
justify-content: flex-end;
align-items: flex-end;
margin-top: 3rem`

export const SingleProductDescription = styled.div`
padding: 2rem 1rem;
display:flex;
flex-direction: column;
font-family: "Montserrat", sans-serif;
`

export const SingleProductCategory = styled.div`
background-color:#827b6e;
color: white;
border-radius: 50px;
display: inline;
width: fit-content;
padding: .6rem
`

export const AddToCartSingleButton = styled.button`
width: 100%;
background-color: black;
color: white;
font-weight: 700;
padding: 1rem 2rem;
margin: 2rem 0;
text-transform: uppercase;
font-size: 16px;
cursor: pointer
`