import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { ContactPageContainer, ContactPageMap, BrandInformationList, BrandContactDetailList, BrandContactDetailListItem, UserMessageContactFormContainer, UserMessageContactForm, UserMessageContactFormInput } from '../styling/contactPageStyling';
import { SharedCTAButton, SharedSubtitle, SharedTitle } from '../styling/sharedStyling';





const Forms = () => {

    const [contactFormMessage, setContactFormMessage] = useState({
        name: '',
        surname: '',
        mail: '',
        tel: '',
        msg: ''
    })

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
            <BrandInformationList>
                <BrandContactDetailList>
                    <BrandContactDetailListItem>Location: City, Country</BrandContactDetailListItem>
                    <BrandContactDetailListItem>Telephone: <a href='tel:123-456-789'>123-456-789</a></BrandContactDetailListItem>
                    <BrandContactDetailListItem>Opening hours: 10:00-20:00</BrandContactDetailListItem>
                    <BrandContactDetailListItem>Contact us: <a href='mailto:mymail@myshop.com'>mymail@myshop.com</a></BrandContactDetailListItem>
                </BrandContactDetailList>
                <ContactPageMap>
                    <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.4692896589245!2d-3.6879925779192337!3d40.41521993201166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228a007be2e9b%3A0x79abeb55cc8dfa59!2sPalacio%20de%20Cristal!5e0!3m2!1sen!2ses!4v1646502283783!5m2!1sen!2ses'} allowFullScreen="" width={800} height={300} loading="lazy" ></iframe>
                </ContactPageMap>
            </BrandInformationList>
            <SharedSubtitle>Any questions?</SharedSubtitle>
            <UserMessageContactFormContainer>
                <UserMessageContactForm>
                    <label>Your name</label>
                    <UserMessageContactFormInput placeholder='Your name' required onChange={(e) => setName(e.target.value)} />
                    <label>Your surname</label>
                    <UserMessageContactFormInput placeholder='Your surname' required onChange={(e) => setSurname(e.target.value)} />
                    <label>Your mail</label>
                    <UserMessageContactFormInput placeholder='Your mail' type="mail" required onChange={(e) => setMail(e.target.value)} />
                    <label>Your phone (optional)</label>
                    <UserMessageContactFormInput placeholder='123456789' type="number" onChange={(e) => setTel(e.target.value)} />
                    <label>Message</label>
                    <UserMessageContactFormInput type="text" placeholder='Write your message here' onChange={(e) => setMsg(e.target.value)} />
                </UserMessageContactForm>
            </UserMessageContactFormContainer>
            <div>
                <SharedCTAButton onClick={handleSubmit}>Send message</SharedCTAButton>
            </div>

        </ContactPageContainer>
    )
}


export default Forms
