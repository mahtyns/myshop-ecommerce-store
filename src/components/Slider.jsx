import styled from 'styled-components'

import { ArrowBackIos } from '@material-ui/icons';
import { ArrowForwardIos } from '@material-ui/icons';

const Container = styled.div`
height: 100vh;
width: 100%;
background-color: #f7ede2;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 40px;
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
height: inherit`;

const Slide = styled.div`
width: 100vw;
height: inherit;
object-fit: cover`;


const SlideImg = styled.img`
width: 100%;
max-height:100%;
object-fit: cover`;


const InfoContainer = styled.div`
width: 100%;
top: 25px;
right: 10px;`


const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowBackIos/>
            </Arrow>
            <Wrapper>
                     <SlideImg src="https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/> 
                <Slide>                   
                                 
                    <InfoContainer>
                     
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowForwardIos/>
            </Arrow>
          
        </Container>
    )
}

export default Slider
