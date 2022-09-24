import React from 'react';
import { FooterContainer, FooterContents, FooterLogo, FooterWrapper } from '../styling/footerStyling';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterContents>
                    <FooterLogo>
                    MyShop
                    </FooterLogo>
                </FooterContents>
                <FooterContents>
                    Project is a part of DareIT Mentorship Programme for Women
                </FooterContents>
                <FooterContents>
                    Coded by mahtyns - 2021/2022 - <a href='mailto:m.smolarek19@gmail.com'>contact me</a><br />
                    <a href='https://github.com/mahtyns' target='_blank' rel='noreferrer'>Visit my Github</a> 
                    </FooterContents>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
