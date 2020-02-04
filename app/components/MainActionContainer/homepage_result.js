import React, { Component } from 'react';
import styled from 'styled-components';

import Img from './Img';
import PlaceholderB from './placeholderC.jpg'


const Container = styled.div`
  width: 100%;
  height: 210px;
  margin-top: 20px;
  display: flex;
`;

const DateResultWrap = styled.div`
  width:  11%;
  height: 100%;
  background-color: red;
  text-align: center;
  padding-top: 30px;
`;

const ResultImgWrap = styled.div`
  height: 100%;
  width: 55%;
`;

const ResultDescriptionWrap = styled.div`
  width: 34%;
  height: 100%;
`;

const DescriptionTitle = styled.div`
  width: 100%;
  display: flex;
  padding-left: 5%;
`;

const TitleH1 = styled.h1`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
`;

const ArrowHiddenIcon = styled.a`
  color: red;
  margin-left: 18px;
  position: relative;
  bottom: 0px;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
`;

const ResultDescriptionPCont = styled.div`
  width: 100%;
  padding-left: 5%;
`;
 
 const ResultDescription_P = styled.p`
  font-family: museo-sans, sans-serif;
  font-style: normal;
  font-weight: 100;
 `;

 const DateResult_h1 = styled.h1`
  color: white;
  margin: 0px;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
 `;

  const DateResult_p = styled.p`
  margin: 0px;
  color: white;
  font-weight: 600;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
 `;

  const DateResult_p2 = styled.p`
  margin: 0px;
  color: white;
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 400;
 `;


 const Span = styled.span`
  position: absolute;
  border-bottom: solid 1.5px white;
  width: 20px;
`;

const SpanDiv = styled.div`
  width: 100%;
  padding-right: 15%;
`;

class HomePageResult extends Component {
  render() {
    return (
        <Container>
            <DateResultWrap>
              <DateResult_h1 > 26 </DateResult_h1 >
              <DateResult_p>August</DateResult_p>
              <DateResult_p>2016</DateResult_p>
              <SpanDiv>
              <Span />
              </SpanDiv>
              <DateResult_p2>JD</DateResult_p2>

            </DateResultWrap>
            <ResultImgWrap>
              <Img src={PlaceholderB} alt="something" />
            </ResultImgWrap>
            <ResultDescriptionWrap>
                <DescriptionTitle>
                    <TitleH1> Wacka Flocka </TitleH1>
                    <ArrowHiddenIcon className="material-icons">&#xE317;</ArrowHiddenIcon>
                </DescriptionTitle>
                <ResultDescriptionPCont> 
                  <ResultDescription_P>
                     Lorem Ipsum is simply dummy text 
                     of the printing and typesetting 
                     industry. Lorem Ipsum has been the
                      industry's standard dummy text ever
                      nce the 1500s, when an unknown printe
                      r took a galley 
                  </ResultDescription_P>
                </ResultDescriptionPCont>
            </ResultDescriptionWrap>
        </Container>
        );
  }
}

export default HomePageResult;