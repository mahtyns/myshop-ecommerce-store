import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: auto;
width: 100%;
padding: 30px 50px`;

const AboutInfo = styled.h1`
font-size:60px;
text-align: center

`;

const Info = styled.div`
padding: 30px 50px;
display:flex;
flex-direction: column`;



const About = () => {
    return (
        <Container>
            <AboutInfo>About us</AboutInfo>
                   
            <Info>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error hic cupiditate atque obcaecati itaque tempore commodi dolorum rerum perferendis? Quia ut harum nihil molestias velit inventore commodi dolores, incidunt repellat quos molestiae ex nesciunt veritatis animi vitae ducimus eaque rem quidem voluptate dolorum soluta libero. Sapiente esse, animi earum minima atque fugit quaerat id ducimus ea dolore fugiat et quidem accusantium nulla perspiciatis quo, adipisci repellendus? Quisquam, beatae et? Repellat eius recusandae quidem mollitia veniam incidunt nobis, nisi molestiae libero consequatur consequuntur, aut numquam architecto quisquam quasi dignissimos harum laborum cum id nihil eum. Voluptatum, iusto atque tempora eum eaque nostrum fugiat ipsam temporibus quaerat a consequuntur veritatis obcaecati reprehenderit nam qui fuga quasi autem modi accusantium laudantium maiores delectus quos. Voluptatum eius dolores voluptate temporibus autem suscipit dolorem eos? Sint quam non eligendi autem! Quidem maxime iure animi expedita placeat nesciunt. Ipsum sequi omnis maxime nobis itaque qui nam consectetur ad atque assumenda reiciendis, exercitationem dolores molestiae minus magni architecto odit necessitatibus voluptatum consequatur nisi! Dignissimos iure tempore consectetur nobis corrupti libero, possimus labore voluptas cupiditate reprehenderit delectus culpa impedit est! Consequuntur optio facilis unde sequi possimus ducimus aperiam nostrum, sit a perspiciatis consequatur nihil rem beatae expedita omnis.

           
            </Info>

        </Container>    
    )
}

export default About
