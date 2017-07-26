import React from "react";
import {Button, Row, Col, Container} from 'reactstrap';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
const API_URL = 'http://localhost:8080/api'

class FullPropertyDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      property: {},
    };
  }

  componentDidMount(){
    axios.get(`${API_URL}/properties/${this.props.match.params.id}`)
    .then((data) => {
      this.setState({ property: data.data[0] });
    })
  }

  makeReservation = (event) => {
    event.preventDefault()
    axios.patch(`${API_URL}/properties/${this.props.match.params.id}`,
    {bookedOnHalloween: true})
    .then((data) => {
      console.log(data);
      this.setState({ property: data.data });
    })
  }

  render(){
    if(!this.state.property.id) {
      return <div> Loading...</div>
    }

    return (
      <Container className="fullPropContainer">
        <Row className="fullPropDetails">
          <Col xs="6">
            <div className="fullPropDesc">
              <h3>
                {this.state.property.property_name}
              </h3>
              <p>
                {this.state.property.description}
              </p>
            </div>
          </Col>
          <Col xs="6">
            <div className="fullPropImageDiv">
              <img className="fullPropImage"src={this.state.property.photo_url} alt="a something should go here" height="200px"></img>
            </div>
          </Col>
        </Row>
        <Row className="fullPropDetails">

            <Col className="fullPropDetsCol" xs="4">
              <h5>Address:</h5>
              <div>{this.state.property.street_address}</div>
              <div>{this.state.property.city}</div>
              <div>{this.state.property.state}</div>
              <div>{this.state.property.zip_code}</div>
            </Col>
            <Col className="fullPropDetsCol" xs="4">
              <h5>Amenities:</h5>
              <div>{this.state.property.amenities}</div>
            </Col>
            <Col className="fullPropDetsCol" xs="4">
              <h5>House Rules:</h5>
              <div>{this.state.property.house_rules}</div>
            </Col>

        </Row>
        <Row>
          <Col>
            <Button className="reservationBtn" onClick={this.makeReservation}><span className="reservationBtnText">Reserve this room</span></Button>
          </Col>
        </Row>
      </Container>

    )
  }
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  }
}

export default withRouter(connect(mapStateToProps)(FullPropertyDisplay));
