import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const My_logo = styled(Link)`
  height: 149px;
  width: 155px;
  text-align: end;
  user-select: none;
  text-decoration: none;
  outline: 0;
  color: inherit;
  margin: 2%;
  @media screen and (max-width: 360px) {
    width: 90px;
  }
`;

const Logo_h1 = styled.h1`
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-bottom: -10px;
  font-size: 2.37em;
  @media screen and (max-width: 360px) {
    font-size: 1.6em;
    line-height: 46px;
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
