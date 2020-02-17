import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Img from './Img';
import Profile from './profile.png'

const Container = styled.div`
  float: left;
  width: -webkit-fill-available;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Alink = styled(Link)`
  vertical-align: text-top;
  margin: 1em;
  &:hover{
    color: rgb(254,0,0);
  }
  @media screen and (max-width: 720px) {
    margin: 1em;
  }
`;

const Span = styled.span`
  position: absolute;
  margin-top: .7em;
  border-bottom: solid 2px #fe0000;
  width: 15px;
  left: 18.8%;
  vertical-align: text-bottom;
`;

const Ul_links = styled.ul`
  text-decoration: none;
  list-style-type: none;
  padding: 0px;
  margin-top: 4em;
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 300;
`;

const LI_list = styled.li`
  margin-top: 1em;
  margin-bottom: .5em;
`

class LinksContainer extends Component {
  render() {
    return (
        <Container>
          <Ul_links>
            <LI_list>
              <Alink to="/"> Program </Alink>
              <Span />
            </LI_list>
            <LI_list>
              <Alink to="/info"> Info </Alink>
              <Span />
            </LI_list>
            <LI_list>
              <Alink to="/booking"> Booking </Alink>
              <Span />
            </LI_list>
            <LI_list>
              <Alink to="/FAQ"> FAQ </Alink>
              <Span />
            </LI_list>
            <LI_list>
              <Alink to="/contact"> Contact </Alink>
              <Span />
            </LI_list>
          </ Ul_links>
        </Container>
        );
  }
}

export default LinksContainer;