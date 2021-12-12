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
padding: 0px 40px`;

const Arrow = styled.div`
background-color: rgb(255,255,255,0.2);
width: 30px;
height:30px;
border-radius: 30px;
box-shadow: 2px 2px 5px rgb(0,0,0,0.1);
display: flex;
align-items: center;
justify-content: center;
text-align: center`;



const Slider = () => {
    return (
        <Container>
            <Arrow>
                <ArrowBackIos/>
            </Arrow>
        
            Slider
            <Arrow>
                <ArrowForwardIos/>
            </Arrow>
          
        </Container>
    )
}

export default Slider
