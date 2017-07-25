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
              <NavItem className="navItem">
                <NavLink href="/postproperty" className="navBarText">Post a room</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



export default NavBar;
