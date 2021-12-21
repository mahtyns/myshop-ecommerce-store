import styled from 'styled-components'
import react, { Component } from 'react';


import { ArrowBackIos } from '@material-ui/icons';
import { ArrowForwardIos } from '@material-ui/icons';
import { banners } from '../data';


const Container = styled.div`
height: 100vh;
width: 100%;
background-color: #f7ede2;
display: flex;
justify-content: space-between;
align-items: center;
position: relative`;

const Arrow = styled.div`
background-color: #fff;;
width: 30px;
height:30px;
border-radius: 30px;
box-shadow: 2px 2px 5px rgb(0,0,0,0.1);
position: absolute;
top: 50%;
bottom: 50%;
left: ${props => props.direction === "left" && "20px"};
right: ${props => props.direction === "right" && "20px"};
display: flex;
justify-content: center;
align-items: center;
cursor:pointer;
opacity: 0.7`;

const Wrapper = styled.div`
height: inherit;
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
top: 10px`;


const SlideImg = styled.img`
width: 100%;
max-height:100%;
object-fit: cover;
`;


const InfoContainer = styled.div`
`;


// const Slider = () => {

const Slider = () => {


   // Change the banner with arrows
    // const handleClick= function(direction) {
    //     console.log(direction);
    // }

    return (
        <Container>
            <Arrow direction="left" 
            // onClick={()=>{handleClick("left")}}
            >
                <ArrowBackIos/>
            </Arrow>
            <Wrapper>
                  <SlideImg src={banners[this.state.active].img}/>     
                <Slide>                   
                                
                    <InfoContainer>
                    
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" 
            // onClick={()=>{handleClick("right")}}
            >
                <ArrowForwardIos/>
            </Arrow>
          
        </Container>
    )
}



export default Slider
