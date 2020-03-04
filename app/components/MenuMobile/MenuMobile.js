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
  font-size: 13vw;
  &:hover{
    color: rgb(254,0,0);
  }
  font-family: tablet-gothic,sans-serif;
  font-style: normal;
  font-weight: 600;
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

const LI_list = styled.li`
  text-decoration: none;
  list-style-type: none;
  margin-top: 5vh;
  margin-bottom: .5em;
  text-align: center;
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
    const routes = [
      { link: "/", name: "Program" , key:'1'},
      { link: "/info", name: "Info", key:'2' },
      { link: "/booking", name: "Booking", key:'3' },
      { link: "/FAQ", name: "FAQ", key:'4' },
      { link: "/contact", name: "Contact", key:'5' },
    ]

    const UILink = ({ link, name, key }) =>
      <LI_list key={key}>
        <Alink to={link} onClick={this.toggleExpandedMenu}> {name} </Alink>
      </LI_list>

    const UILinkContainer = () => routes.map(UILink)
    return (
      <div>
        <div className={this.state.expandedMenu ? 'expanded-mobile-menu' : 'hidden-mobile-menu'}>
          <MenuIconOnMenu onClick={this.toggleExpandedMenu} className='material-icons'>menu</MenuIconOnMenu>
          <div>
            <Container>
              <UILinkContainer>
                <UILink />
              </UILinkContainer>
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
