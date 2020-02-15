import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutUser } from '../../containers/App/actions';

import styled from 'styled-components';

import SocialLinks from '../SocialLinks/social_links';
import ProfileContainer from './profile';
import LinksContainer from './about_links';
import { defaultMemoize } from 'reselect';


const Wrapper = styled.div`
  position: absolute;
  top: 250px;
  width: 20%;
  padding-left: 4%;
  padding-right: 4%;

  @media screen and (max-width: 460px) {
    top: 20%;
    width: 100%;
    height: 100px;
  }
`;

const Button = styled(Link)`
  width: 100px;
  height: 30px;
  margin-bottom: 10%;
  float: left;
  display: block;
  font-weight: 600;
  border: 2px solid red;
  text-align: center;

  @media screen and (max-width: 460px) {
    margin: 8px;
    float: right;
  }
`;

const LogOutButton = styled.button`
  color: black;
  font-weight: 600;
  cursor: pointer;
  margin-left: .5vw;
   &:hover {
    color: red;
  }
`;

class LeftContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  logout(e) {
    e.preventDefault();
    this.props.logoutUser(this.state);
  }

  render() {

    const isAuthenticated = this.props.global.isAuth

    const userLinks = (
      <div>
        <ProfileContainer />
        <LogOutButton onClick={this.logout.bind(this)}> LOGOUT </LogOutButton>
      </div>
    );

    const guestLinks = (
      <div>
        <Button to='/login'>LOGIN</Button>
        <Button to='/sign-up'>REGISTER</Button>
      </div>
    );

    return (
      <Wrapper>
        {isAuthenticated ? userLinks : guestLinks}
        <LinksContainer />
        <SocialLinks />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(LeftContainer);
