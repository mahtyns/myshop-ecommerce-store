import styledComponents from "styled-components";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  height: 100px;
  position: absolute:
  bottom: 0;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center

`;

export const FooterWrapper = styled.div`
  width: 95%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

export const FooterContents = styled.div`
width: 30%;
height: 80%;
padding: 10px;
& > a {
  color: white!important;
}`;

export const FooterLogo = styled.div`
  font-family: "MonteCarlo", cursive;
  font-size: 1.6rem;
`;
