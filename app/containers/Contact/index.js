import Helmet from 'react-helmet';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
  position: absolute;
  left: 10vw;
  top: 35vh;
`;

const Alink = styled(Link)`
  vertical-align: text-bottom;
  &:hover{
    color: rgb(254,0,0);
  }
`;

const Span = styled.span`
  position: absolute;
  border-bottom: solid 2px #fe0000;
  left: 18.8%;
  vertical-align: text-bottom;
`;

const  Ul_links = styled.ul`
  text-decoration: none;
  list-style-type: none;
  padding: 0px;
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 300;
`;

const ContactPageDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const ButtonBack = styled(Link)`
    position: absolute;
    height: 50px;
    padding-top: 1.5vh;
    width: 100px;
    top: 60vh;
    left: 20%;
    text-align: center;
    border: 2px solid red;
    margin-left: 10%;
`;


class ContactPage extends Component {
  render() {
    return (
      <ContactPageDiv>
        <Container>
          <h1> Contact me here. </h1>
          < Ul_links>
            <li>
              <Alink to="/"> Github </Alink>
            </li>
            <li>
              <Alink to="/info"> Personal Website </Alink>
              <Span />
            </li>
            <li>
              <Alink to="/booking"> Linkedin </Alink>
              <Span />
            </li>
          </ Ul_links>
        </Container>
        <ButtonBack to="/"> Back </ButtonBack>
      </ContactPageDiv>
        );
  }
}

export default ContactPage;