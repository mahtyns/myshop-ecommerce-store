import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Alert from '../components/Alert';
import Footer from '../components/Footer';
import Forms from '../components/Forms';


const Wrapper = styled.div`
height: auto;`;


const Form = () => {
    return (
        <>
        <Navbar/>
        <Alert/>
        <Wrapper>
            <Forms/>
        </Wrapper>
        <Footer/>
            
        </>
    )
}

export default Form
