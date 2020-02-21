import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const My_logo = styled(Link)`
z-index: 100;
  height: 149px;
  width: 155px;
  text-align: end;
  user-select: none;
  text-decoration: none;
  outline: 0;
  color: inherit;
  // @media screen and (max-width: 360px) {
  //   font-size: .8em;
  // }
`;

const Logo_h1 = styled.h1`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 2.37em;
  font-size: calc(21px + (26 - 14) * ((100vw - 300px) / (2000 - 300)));
  @media screen and (max-width: 340px) {
    font-size: 20px;
  }
`;

const Span_text = styled.span`
  border-bottom: solid 3.2px #000000;
  display: inline;
  padding-bottom: 0px;
`;

class Logo extends Component {
  render() {
    return (
      <My_logo to="/">
        <Logo_h1>
          <Span_text> ROCKE </Span_text>
        </Logo_h1>
        <Logo_h1>
          <Span_text> FELL </Span_text>
        </Logo_h1>
        <Logo_h1>
          <Span_text> ER </Span_text>
        </Logo_h1>
      </My_logo>
    );
  }
}

export default Logo;
