import styled from 'styled-components'

const Container = styled.div`
height:30px;
background-color:#84a59d;
font-weight: 400;
text-align: center;
color: white;
line-height: 30px`;


const Alert = () => {
    return (
        <Container>
            Free Shipping from 50€
        </Container>
    )
}

export default Alert
