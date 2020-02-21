import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = styled.div`
  display none;

  @media screen and (max-width: 480px) {
    position: absolute;
    left: 10vw;
    top: 165px;
    display: block;
    height: 50px;
    width: 95px;
    z-index: 50;
  }
`;

const MenuIcon = styled.a`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    font-size: 2.8em;
    color: red;
    z-index: 50;

  }
`;

const MenuIconOnMenu = styled.a`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    margin: 10%;
    font-size: 2.8em;
    color: white;
    z-index: 50;

  }
`;

const Container = styled.div`
  color: white;
`;
const Alink = styled(Link)`
  vertical-align: text-top;
  margin: 1em;
  &:hover{
    color: rgb(254,0,0);
  }
  @media screen and (max-width: 720px) {
    margin: 1em;
  }
`;

const Span = styled.span`
  position: absolute;
  margin-top: .7em;
  border-bottom: solid 2px #fe0000;
  width: 15px;
  left: 18.8%;
  vertical-align: text-bottom;
`;

const Ul_links = styled.ul`
  text-decoration: none;
  list-style-type: none;
  padding: 0px;
  margin-top: 4em;
  font-family: tablet-gothic, sans-serif;
  font-style: normal;
  font-weight: 300;
`;

const LI_list = styled.li`
  margin-top: 1em;
  margin-bottom: .5em;
`

class MobileMenu extends Component {
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
      <div>
        <div className={this.state.expandedMenu ? 'expanded-mobile-menu' : 'hidden-mobile-menu'}>
          <MenuIconOnMenu onClick={this.toggleExpandedMenu} className='material-icons'>menu</MenuIconOnMenu>
          <div>
        <Container>

          <Ul_links>
            <LI_list>
              <Alink to="/" onClick={this.toggleExpandedMenu}> Program </Alink>
              <Span />
            </LI_list>
            <LI_list>
              <Alink to="/info" onClick={this.toggleExpandedMenu}> Info </Alink>
              <Span />
            </LI_list>
            <LI_list>
              <Alink to="/booking" onClick={this.toggleExpandedMenu}> Booking </Alink>
              <Span />
            </LI_list>
            <LI_list>
              <Alink to="/FAQ" onClick={this.toggleExpandedMenu}> FAQ </Alink>
              <Span />
            </LI_list>
            <LI_list>
              <Alink to="/contact" onClick={this.toggleExpandedMenu}> Contact </Alink>
              <Span />
            </LI_list>
          </ Ul_links>
        </Container>

          </div>
        </div>

        <Menu>
          <MenuIcon onClick={this.toggleExpandedMenu} className='material-icons'>menu</MenuIcon>
        </Menu>
      </div>
    );
  }
}

export default MobileMenu;