import styled from 'styled-components';

const Container = styled.div`
padding: 20px 0px;
display: flex;
flex-direction: column;
`;

const HeadLine = styled.h1`
font-size:60px;
text-align: center

`;

// const Info = styled.div`
// padding: 30px 50px;
// display:flex;
// flex-direction: column`;

const InfoList = styled.div`
display: flex;
flex-direction: row;
padding: 30px 50px;`;

const InfoItems = styled.div`
flex: 1;`;

const InfoMap = styled.div`
flex: 1;
text-align: center`;

const Form = styled.form`
padding: 30px 50px;
display: flex;
flex-direction: column;
flex: 1`;

const InfoItem = styled.div`
font-size: 18px;
padding: 15px 0`;

const FormInput = styled.input`
width: 40%`;

const Button = styled.button`
background-color: black;
color: white;
border: none;
padding: 20px 80px;
float: right;
margin: 10px 30px;
cursor: pointer;
`;

const FormContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: space-between`;


const Forms = () => {
    return (
        <Container>
    
            <InfoList>
                <InfoItems>
                     <InfoItem>Location: City, Country</InfoItem>
            <InfoItem>Telephone: <a href='tel:123-456-789'>123-456-789</a></InfoItem>
            <InfoItem>Opening hours: 10:00-20:00</InfoItem>
            <InfoItem>Contact us: <a href='mailto:mymail@myshop.com'>mymail@myshop.com</a></InfoItem>

                </InfoItems>
                
            </InfoList>
            <HeadLine>Contact</HeadLine>
            <FormContainer>
          
            <Form>
               
                <label>Your name</label>
                <FormInput placeholder='Your name'/>
                <label>Your surname</label>
                <FormInput placeholder='Your surname'/>
                <label>Your mail</label>
                <FormInput placeholder='Your mail'/>
                <label>Your phone (optional)</label>
                <FormInput placeholder='123456789' type="number"/>
            </Form>
            <InfoMap>
                    Map
                </InfoMap>
            </FormContainer>
            <div>
            <Button>Send message</Button>
            </div>
           
        </Container>
    )
}

export default Forms
