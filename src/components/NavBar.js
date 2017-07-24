import React from "react";
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
  import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



class NavBar extends React.Component {
  render(){
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right/>
          <NavbarBrand href="/">ScareBnB</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/property/">Properties</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



export default NavBar;
