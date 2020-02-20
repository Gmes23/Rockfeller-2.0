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

import LeftContainer from 'components/LeftContainerProfile';
import MobileMenu from 'components/MenuMobile/MenuMobile';

// Auth Routes 
import SignUpForm from 'containers/SignUp/index'
import SignInForm from 'containers/SignIn/index'
import Auth from 'containers/Auth/Auth'


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
    const isAuth = this.props.global.isAuth
    console.log(isAuth , ' this is auth ')

  return (
    <AppWrapper>
        <Helmet
        titleTemplate="Rockfeller - Tickets for your events"
        defaultTitle="Rockfeller"
        meta={[
          { name: 'description', content: 'a ticket online store' },
        ]}
        />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/404" component={NotFoundPage} />
        <Route path="/FAQ" component={FAQpage} />
        <Route path="/contact" component={ContactPage} />

        {/* Routes for Auth, and redirects if success */}
        {/* <Route path="/sign-up" component={SignUpForm} />
        <Route path="/login" component={SignInForm} /> */}
        <Route exact path="/sign-up" render={() => (
            <Auth isAuth={isAuth}>
              <SignUpForm  />
            </Auth>
          )} />
          <Route exact path="/login" render={() => (
            <Auth  isAuth={isAuth}>
              <SignInForm/>
            </Auth >
          )} />


      </Switch>
      <GlobalStyle />
      <MobileWrapper>
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