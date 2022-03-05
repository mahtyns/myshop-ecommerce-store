import styled from 'styled-components';
import { useState } from 'react';
import { ContactPageContainer, ContactPageMap } from '../styling/contactPageStyling';
import { SharedSubtitle, SharedTitle } from '../styling/sharedStyling';

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
float: left;
margin: 30px 60px;
cursor: pointer;
`;

const FormContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: space-between`;


const Forms = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [mail, setMail] = useState("");
    const [tel, setTel] = useState(0);
    const [msg, setMsg] = useState("")

    const handleSubmit = () => {
        console.log(`${name} ${surname} ${mail} ${tel} ${msg}`);
    }


    return (
        <ContactPageContainer>
            <SharedTitle>Contact Info</SharedTitle>
            <InfoList>
                <InfoItems>
                    <InfoItem>Location: City, Country</InfoItem>
                    <InfoItem>Telephone: <a href='tel:123-456-789'>123-456-789</a></InfoItem>
                    <InfoItem>Opening hours: 10:00-20:00</InfoItem>
                    <InfoItem>Contact us: <a href='mailto:mymail@myshop.com'>mymail@myshop.com</a></InfoItem>

                </InfoItems>
                <ContactPageMap>
                    <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.4692896589245!2d-3.6879925779192337!3d40.41521993201166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228a007be2e9b%3A0x79abeb55cc8dfa59!2sPalacio%20de%20Cristal!5e0!3m2!1sen!2ses!4v1646502283783!5m2!1sen!2ses'} allowfullscreen="" loading="lazy" width={800} height={400}></iframe>
                </ContactPageMap>
            </InfoList>
            <SharedSubtitle>Any questions?</SharedSubtitle>
            <FormContainer>

                <Form>

                    <label>Your name</label>
                    <FormInput placeholder='Your name' required onChange={(e) => setName(e.target.value)} />
                    <label>Your surname</label>
                    <FormInput placeholder='Your surname' required onChange={(e) => setSurname(e.target.value)} />
                    <label>Your mail</label>
                    <FormInput placeholder='Your mail' type="mail" required onChange={(e) => setMail(e.target.value)} />
                    <label>Your phone (optional)</label>
                    <FormInput placeholder='123456789' type="number" onChange={(e) => setTel(e.target.value)} />
                    <label>Message</label>
                    <FormInput type="text" placeholder='Write your message here' onChange={(e) => setMsg(e.target.value)} />
                </Form>

            </FormContainer>
            <div>
                <Button onClick={handleSubmit}>Send message</Button>
            </div>

        </ContactPageContainer>
    )
}

export default Forms
