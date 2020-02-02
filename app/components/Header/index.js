import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import Logo from '../Logo/Logo';
import CalendarWidget from '../Calendar/Calendar';
import FeaturesNav from '../FeaturesNav/FeaturesNav';
import LanguageOption from '../Language/LanguageOption';
// import SearchBar from '../SearchBar/SearchBar';

const Right_navcontainer = styled.div`
  width: 100%;
  height: 100%;
  // might change to percentage later on
  padding-left: 155px;
  padding-top: 13px;
  padding-bottom: 44px;
  display: flex;
`;

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar>
        <Logo />
        <Right_navcontainer>
          <CalendarWidget />
          <FeaturesNav />
          <LanguageOption />
          {/* <SearchBar /> */}
        </Right_navcontainer>
      </NavBar>
    );
  }
}

export default Header;
