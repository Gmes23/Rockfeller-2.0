import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 43px;
  left: 30.3%;
  width: 125px;
  margin-left: 8%;

  // @media screen and (max-width: 460px) {
  //   display: block;
  //   right: 0%;
  //   left: 50vw;
  //   top: 20px;
  // }

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 1168px) {
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  padding-top: 20px;
`;

const Selection = styled.div`
  width: 100%;
  height: 21px;
  display: flex;
`;

const Logo_h1 = styled.h1`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: -10px;
  font-size: .95em;

  @media screen and (max-width: 460px) {
    font-size: .7em
    margin-bottom: -16px;
  }

`;

const Span_text = styled.span`
  border-bottom: solid 2px #fe0000;
  display: inherit;
`;

const Select_option = styled.p`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: .9em;
  color: red;
  margin: 0px;
  float: left;

  @media screen and (max-width: 460px) {
    font-size: .7em
  }
`;

const Select_option_2 = styled.p`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: .9em;
  color: black;
  margin: 0px;
  margin-left: 12%;
  float: right;
   
  @media screen and (max-width: 460px) {
    font-size: .7em
  }
`;


class FeatureWidget extends Component {
  render() {
    return (
      <Container>
        <Logo_h1>
          <Span_text> VENUES </Span_text>
        </Logo_h1>
        <BottomContainer>
          <Selection>
            <Select_option>RF </Select_option>
            <Select_option_2>Rockfeller </Select_option_2>
          </Selection>
          <Selection>
            <Select_option>RF </Select_option>
            <Select_option_2>Rockfeller </Select_option_2>
          </Selection>
          <Selection>
            <Select_option>RF </Select_option>
            <Select_option_2>Rockfeller </Select_option_2>
          </Selection>
        </BottomContainer>
      </Container>
    );
  }
}

export default FeatureWidget;
