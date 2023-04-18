import styledComponents from "styled-components";
import styled from "styled-components";

export const SharedTitle = styled.div`
font-size:60px;
text-align: center;
margin: 90px 0px 0px 0px;
width: 100%;
@media (max-width: 620px) {
    font-size: 45px;
    word-wrap: break-word;
    margin: 50px 0
  }
`;

export const SharedSubtitle = styled.div`
font-size:40px;
text-align: left;
padding: 10px;
margin: 10px 0px;
`;

export const SharedParagraph = styled.div`
padding: 30px 50px;
display:flex;
flex-direction: column;
text-align: center;
font-family: "Montserrat", sans-serif;
@media (max-width: 475px) {
    padding: 10px 25px
  }
`;

export const SharedSecondaryText = styled.div`
text-align: left;
padding: 10px 15px;
font-size: 20px`;

export const SharedCTAButton = styled.button`
padding: 15px 35px;
background-color: black;
color: white;
border: none;
text-transform: uppercase;
margin: 25px 0;
cursor: pointer;
font-family: "Montserrat", sans-serif;
`