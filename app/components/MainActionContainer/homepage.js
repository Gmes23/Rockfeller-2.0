import React, { Component } from 'react';
import styled from 'styled-components';

import HomePageResult from './homepage_result';

const Container = styled.div`
  width: 100%;

  @media screen and (max-width: 360px) {
    display: none;
  }
`;

const CurrentActions = styled.div`
  width: 100%;
  padding-left: 38%;
  display: flex;
`;

const UpcomingShowTextContainer = styled.div`
  height: 30px;
  width: 150px;
  font-family: corporate-s, sans-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 12px;
`;

const TriangleArrow = styled.div`
  color: red;
  margin-right: 18px;
  position: relative;
  bottom: -5px;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
`;

const DisplayResultSettingContainer = styled.div`
  height: 30px;
  width: 150px;
  margin-left: 4.5%;
`;

const DisplayAsListIcon = styled.a`
  position: relative;
  bottom: -7px;
`;

const DisplayAsVArray = styled.a`
  position: relative;
  bottom: -7px;
  margin-left: 10px;
  color: red;
`;

class ActionBar extends Component {
  render() {
    return (
        <Container>
           <CurrentActions>
              <UpcomingShowTextContainer>
                   <TriangleArrow className="material-icons">play_arrow</TriangleArrow>
                    Upcoming Shows
              </UpcomingShowTextContainer> 
               <DisplayResultSettingContainer>
                   <DisplayAsListIcon className="material-icons">menu</DisplayAsListIcon>
                   <DisplayAsVArray className="material-icons">view_stream</DisplayAsVArray>
              </DisplayResultSettingContainer>    
           </CurrentActions>
        </Container>
        );
  }
}

export default ActionBar;