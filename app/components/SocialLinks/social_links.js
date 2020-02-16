import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Img from './Img';
import Facebook from './facebook-box.png'
import Instagram from './instagram.png'
import Twitter from './twitter.png'

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin-top: 22em;
  @media screen and (max-width: 460px) {
    display: none;
  }
  @media screen and (max-width: 670px) {
    display: none;
  }
`;

const IconContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2.333px solid black;
    padding: 1px;
    margin-right: 11%;

    @media screen and (max-width: 480px) {
     display: none;
    }

    @media screen and (max-width: 670px) {
      display: none;
     }
`;

class SocialLinks extends React.Component {
  render() {
    return (

          <Wrapper> 
              <IconContainer>
                <Img src={Facebook} alt="facebooklink" />
              </ IconContainer>
              <IconContainer>
                <Img src={Twitter} alt="twitterlink" />
              </ IconContainer>
              <IconContainer>
                <Img src={Instagram} alt="instagramlink" />
              </ IconContainer>
          </Wrapper>
    );
  }
}

export default SocialLinks;
