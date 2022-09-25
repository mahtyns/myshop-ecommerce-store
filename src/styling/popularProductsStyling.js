import styled from "styled-components";

export const PopularProductsGeneralContainer = styled.div`
width: 100%;
background-color:rgb(249, 245, 240);
padding: 3rem 0`

export const PopularProductGalleryContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-around;
margin: 5rem auto;
`

export const PopularProductSingleItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 30rem;
width: 16rem;
`

export const PopularProductImage = styled.img`
width: 16rem;
height: 16rem;
object-fit: cover;
`

export const PopularProductTitle = styled.div`
text-align: center;
font-family: "Montserrat", sans-serif;
font-size: 1.3rem;
padding: 2rem 0 0 0;
`

export const PopularProductPrice = styled.div`
text-align: center;
font-family: "Montserrat", sans-serif;
font-size: 1.2rem;
padding: .9rem 0 0 0; 
color: #827b6e;
`

export const PopularProductDescr = styled.div`
font-size: 1rem;
text-align: center;
padding: 1rem
`