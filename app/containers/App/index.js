import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'


//Route Components
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import FAQpage from 'containers/FAQ/Loadable'

import ContactPage from 'containers/Contact/Loadable'
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

import CalendarWidget from 'components/Calendar/Calendar';
import Logo from 'components/Logo/Logo';
import LeftContainer from 'components/LeftContainerProfile';
// // import withProgressBar from 'components/ProgressBar';
import MobileMenu from 'components/MenuMobile/MenuMobile';
// import SearchBar from 'components/SearchBar/SearchBar';
import FeatureWidget from 'components/FeaturesNav/FeaturesNav';
import LanguageOption from 'components/Language/LanguageOption';

// Auth Routes 
import SignUpForm from 'containers/SignUp/index'

// Actions 
import { verifyUser } from './actions'


const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0;
  flex-direction: column;
`;

const MobileWrapper = styled.div`
  @media screen and (max-width: 360px) {
    position: absolute;
    top: 20%;
    height: 100px;
    width: 100%;
    paddin-left: 10%;
    paddin-right: 10%;
    display: flex;
  }
`;
class App extends Component {
  componentDidMount() {
    this.props.verifyUser()
  }

  render() {
    // const {
    //   auth: {
    //     isAuth
    //   }
    // } = this.props

  return (
    <AppWrapper>
        <Helmet
        titleTemplate="Rockfeller - Tickets for your events"
        defaultTitle="Rockfeller"
        meta={[
          { name: 'description', content: 'a ticket online store' },
        ]}
        />
    <Logo />
      {/* <SearchBar /> */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/404" component={NotFoundPage} />
        <Route path="/FAQ" component={FAQpage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/sign-up" component={SignUpForm} />

      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />

      <MobileWrapper>
        <FeatureWidget />
        <CalendarWidget />
        <LanguageOption />
        <MobileMenu />
        <LeftContainer />
      </MobileWrapper>
    </AppWrapper>
  );
}
}
const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  verifyUser: () => dispatch(verifyUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);