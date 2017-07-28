import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom'


class NavBar extends React.Component {
  render(){
    return (
      <div>
        <Navbar color="faded" light toggleable className="fixed-top navBarFixed">
          <NavbarToggler right/>
          <NavbarBrand href="/bg/listallproperties" className="navBarText"><span className="scaryText">scare</span> BnB</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="navItem">
                <Link to="/bg/postproperty" className="navBarText">Post a room</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
