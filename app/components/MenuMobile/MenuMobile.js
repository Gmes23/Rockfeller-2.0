import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Menu = styled.div`
  display none;

  @media screen and (max-width: 460px) {
    position: relative;
    left: 9vw;
    top: 20%;
    display: block;
    height: 50px;
    width: 95px;
  }
`;

const MenuIcon = styled.a`
  display: none;

  @media screen and (max-width: 460px) {
    display: block;
    font-size: 2.8em;
    color: red;
  }
`;



class MobileMenu extends Component {
  render() {
    return (
        <Menu>
            <MenuIcon className="material-icons">menu</MenuIcon>
        </Menu>
        );
  }
}

export default MobileMenu;