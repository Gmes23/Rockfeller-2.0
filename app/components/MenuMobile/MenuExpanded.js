import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const Menu = styled.div`
  display none;

  @media screen and (max-width: 480px) {
    position: absolute;
    left: 10vw;
    top: 165px;
    display: block;
    height: 50px;
    width: 95px;
    z-index: 100;
  }
`;

const MenuActions = styled.div`
  background-color: red;
`;

const MenuIcon = styled.a`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    font-size: 2.8em;
    color: red;
  }
`;

const MenuExpanded = styled.div`

`;






class MobileMenuExpanded extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expandedMenu: false,
    }
    this.toggleExpandedMenu = this.toggleExpandedMenu.bind(this);
  }

  toggleExpandedMenu() {
    this.setState({ expandedMenu: !this.state.expandedMenu, });
   }

  render() {
    return (
            <MenuExpanded className={this.state.expandedMenu ? 'expanded-mobile-menu' : 'hidden-mobile-menu'}>

            </MenuExpanded>
           
        );
  }
}

export default MobileMenuExpanded;