import styledComponents from "styled-components";
import styled from "styled-components";

export const SliderContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f7ede2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const SliderNavArrows = styled.div`
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  box-shadow: 2px 2px 5px rgb(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  opacity: 0.7;
  z-index: 50;
`;

export const ImgWrapper = styled.div`
  height: inherit;
  position: relative;
`;

export const SlideTextContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 10px;
`;

export const SlideImg = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  position: absolute;
  top: 40%;
  right: 10%;
  background-color: rgba(255, 255, 255, 0.3);
  width: auto;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: auto;
`;

export const BannerInfoTitle = styled.h1`
  font-size: 28px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`;

export const BannerInfoButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  border: none;
  margin: 30px 0px;
  font-size: 20px;
`;
