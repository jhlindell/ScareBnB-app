import React from "react";

import {Row, Col, Container} from 'reactstrap';
import {postProperty} from '../actions/index';


class FullPropertyDisplay extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render(){
    return (
      <Container className="fullPropContainer">
        <Row className="fullPropDetails">
          <Col xs="6">
          <div className="fullPropDesc">
            <h3>
              Haunted House
            </h3>
            <p>
              This treehouse is next level haunted. This treehouse is probably the headquaters for Ghosts and demons to practice their latest scares.This treehouse is next level haunted. This treehouse is probably the headquaters for Ghosts and demons to practice their latest scares.This treehouse is next level haunted. This treehouse is probably the headquaters for Ghosts and demons to practice their latest scares.
            </p>
          </div>
          </Col>
          <Col xs="6">
            <div className="fullPropImageDiv">
              <img className="fullPropImage" src="http://lorempixel.com/400/200/" alt="a something should go here" height="200px"></img>
            </div>
          </Col>
        </Row>
        <Row className="fullPropDetails">

            <Col className="fullPropDetsCol" xs="4">
              <h5>Address:</h5>
              <div>1000 Somwhere street</div>
              <div>Randomtown</div>
              <div>New State</div>
              <div>10000</div>
            </Col>
            <Col className="fullPropDetsCol" xs="4">
              <h5>Amenities:</h5>
              <div>There is sleeping bag, and a bucket for showering There is sleeping bag, and a bucket for showering There is sleeping bag, and a bucket for showering</div>
            </Col>
            <Col className="fullPropDetsCol" xs="4">
              <h5>House Rules:</h5>
              <div>Don't wake the ghosts</div>
            </Col>

        </Row>
        <Row>
          <Col xs="6">
            <Row>
              <Col xs="1"></Col>
              <Col xs="10">
                <div className="calendarBox">
                  Calendar will go in here
                </div>
              </Col>
              <Col xs="1"></Col>
            </Row>
          </Col>
          <Col xs="6">
            <Row>
              <Col xs="1"></Col>
              <Col xs="10">
                <div className="makeReservationBox">
                  <div>Nightly Price: $45</div>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Some Action</DropdownItem>
                      <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Button>Make reservation!</Button>
                </div>
              </Col>
              <Col xs="1"></Col>
            </Row>
          </Col>
        </Row>

      </Container>

    )
  }
}

export default FullPropertyDisplay;
