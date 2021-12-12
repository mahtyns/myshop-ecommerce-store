import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;
const Pay = styled.div`
background-color: #f7ede2;
width: 100%;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center`;
const Delivery = styled.div`
background-color: #f7ede2;
width: 100%;
padding: 10px 20px;
margin: 30px 0;
`;

const Button = styled.button`
background-color: black;
color: white;
padding: 10px 80px;
font-size: 20px;
border: none;
margin: 10px 0;
`;

const Info = styled.p`
font-size: 16px;
color: gray;
padding: 15px 25px;`;

const Total = styled.h1`
font-size: 28px;
margin: 15px 0`;

const ShopSummary = () => {
    return (
        <Container>
            <Pay>
                <Total>Total: 0€</Total>
                <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio molestias corrupti numquam quisquam quae itaque harum hic temporibus quibusdam?</Info>
                <Button>Continue</Button>
            </Pay>
            <Delivery>Delivery Options</Delivery>
        </Container>
    )
}

export default ShopSummary
