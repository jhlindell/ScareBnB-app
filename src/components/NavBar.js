import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



class NavBar extends React.Component {
  render(){
    return (
      <div>
        <Navbar color="faded" light toggleable className="fixed-top navBarFixed">
          <NavbarToggler right/>
          <NavbarBrand href="/" className="navBarText"><span className="scaryText">scare</span> BnB</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/property/" className="navBarText">Properties</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" className="navBarText">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



export default NavBar;
