import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from  'styled-components';

const FAQpageDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
`;

const UpdateContainer =  styled.div`
  position: absolute;
  left: 22vw;
  top: 35vh;
`;

class FAQpage extends Component { // eslint-disable-line react/prefer-stateless-function
 
  render() {
    return (
      <div>
      
        <FAQpageDiv>
          <UpdateContainer>
            <h1> FAQ / Updates</h1>
              <h3> Updates </h3>
              <p> Profile Page </p>
              <p> Ability to add Friends </p>
              <p> Messaging </p>
          </UpdateContainer>
        </FAQpageDiv>
      </div>
    );
  }
}


// Wrap the component to inject dispatch and state into it
export default FAQpage;

