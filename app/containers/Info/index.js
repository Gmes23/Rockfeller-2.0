import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const InfoPageDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
`;

const InfoContainer = styled.div`
  position: absolute;
  left: 30%;
  top: 25%;
`;

class InfoPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
 
  render() {

    return (
      <div>
        <Helmet
          title="Info"
          meta={[
            { name: 'description', content: 'Search upcoming concerts by your favorite Artist' },
          ]}
        />
        <InfoPageDiv>
          <InfoContainer>
            <h1> Hello Wanderer. </h1>
            <p> This project is intended to showcase my skills and not for monetization </p>
          </InfoContainer>
        </InfoPageDiv>
      </div>
    );
  }
}


// Wrap the component to inject dispatch and state into it
export default InfoPage;
