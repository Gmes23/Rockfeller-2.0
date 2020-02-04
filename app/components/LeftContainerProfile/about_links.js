import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Img from './Img';
import Profile from './profile.png'

const Container = styled.div`
  height: 40%;
  width: 145px;
  padding-left: 15px;
  margin-top: 40px;

  @media screen and (max-width: 460px) {
    display: none;
  }
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
  width: 15px;
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

class LinksContainer extends Component {
  render() {
    return (
        <Container>
          < Ul_links>
            <li>
              <Alink to="/"> Program </Alink>
            </li>
            <li>
              <Alink to="/info"> Info </Alink>
              <Span />
            </li>
            <li>
              <Alink to="/booking"> Booking </Alink>
              <Span />
            </li>
            <li>
              <Alink to="/FAQ"> FAQ </Alink>
              <Span />
            </li>
            <li>
              <Alink to="/contact"> Contact </Alink>
              {/* <Link to="/contact"> Contact </Link> */}

              <Span />
            </li>
            <li>
              <Span />
            </li>
          </ Ul_links>
        </Container>
        );
  }
}

export default LinksContainer;