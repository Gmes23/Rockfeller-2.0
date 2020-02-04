import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import HomePage from './homepage';

const Wrapper = styled.div`
  position: absolute;
  right: 0px
  top: 210px;
  width: 86.69%;
  padding-right: 4%;
  padding-left: 153px;

  @media screen and (max-width: 360px) {
    padding-left: 0px;
    width: 100%;
    top: 190px;
  }
`;

class MainActionContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
          <Wrapper> 
             <HomePage />
          </Wrapper>
    );
  }
}

export default MainActionContainer;