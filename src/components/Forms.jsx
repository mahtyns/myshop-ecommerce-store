import styled from 'styled-components';

const Container = styled.div`
padding: 20px 0px;
display: flex;
flex-direction: column;
`;

const About = styled.h1`
font-size:60px;
text-align: center

`;

const Info = styled.div`
padding: 30px 50px;
display:flex;
flex-direction: column`;

const InfoList = styled.div`
display: flex;
flex-direction: row;
padding: 30px 50px;`;

const InfoItems = styled.div`
flex: 1;`;

const InfoMap = styled.div`
flex: 1`;

const Form = styled.form`
padding: 30px 50px;
display: flex;
flex-direction: column`;

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
`;


const Forms = () => {
    return (
        <Container>
            <About>About Us</About>
            <Info>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error hic cupiditate atque obcaecati itaque tempore commodi dolorum rerum perferendis? Quia ut harum nihil molestias velit inventore commodi dolores, incidunt repellat quos molestiae ex nesciunt veritatis animi vitae ducimus eaque rem quidem voluptate dolorum soluta libero. Sapiente esse, animi earum minima atque fugit quaerat id ducimus ea dolore fugiat et quidem accusantium nulla perspiciatis quo, adipisci repellendus? Quisquam, beatae et? Repellat eius recusandae quidem mollitia veniam incidunt nobis, nisi molestiae libero consequatur consequuntur, aut numquam architecto quisquam quasi dignissimos harum laborum cum id nihil eum. Voluptatum, iusto atque tempora eum eaque nostrum fugiat ipsam temporibus quaerat a consequuntur veritatis obcaecati reprehenderit nam qui fuga quasi autem modi accusantium laudantium maiores delectus quos. Voluptatum eius dolores voluptate temporibus autem suscipit dolorem eos? Sint quam non eligendi autem! Quidem maxime iure animi expedita placeat nesciunt. Ipsum sequi omnis maxime nobis itaque qui nam consectetur ad atque assumenda reiciendis, exercitationem dolores molestiae minus magni architecto odit necessitatibus voluptatum consequatur nisi! Dignissimos iure tempore consectetur nobis corrupti libero, possimus labore voluptas cupiditate reprehenderit delectus culpa impedit est! Consequuntur optio facilis unde sequi possimus ducimus aperiam nostrum, sit a perspiciatis consequatur nihil rem beatae expedita omnis.

           
            </Info>
            <InfoList>
                <InfoItems>
                     <InfoItem>Location: City, Country</InfoItem>
            <InfoItem>Telephone: <a href='tel:123-456-789'>123-456-789</a></InfoItem>
            <InfoItem>Opening hours: 10:00-20:00</InfoItem>
            <InfoItem>Contact us: <a href='mailto:mymail@myshop.com'>mymail@myshop.com</a></InfoItem>

                </InfoItems>
                <InfoMap>

                </InfoMap>
            </InfoList>
            <About>Contact</About>
          
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
            <div>
            <Button>Send message</Button>
            </div>
           
        </Container>
    )
}

export default Forms
