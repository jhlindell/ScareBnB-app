import React from "react";
import {Row, Col, Container} from 'reactstrap';
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

  render(){
    if(!this.state.property.id) {
      return <div> Loading...</div>
    }

    return (
      <Container>
        <Row>
          <Col xs="6">
            <img src={this.state.property.photo_url} alt="a something should go here" height="200px"></img>
          </Col>
          <Col xs="6">
            <h3>
            {this.state.property.property_name}
          </h3>
          <div>
            {this.state.property.description}
          </div>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <h4>Address:</h4>
            <div>{this.state.property.street_address}</div>
            <div>{this.state.property.city}</div>
            <div>{this.state.property.state}</div>
            <div>{this.state.property.zip_code}</div>
          </Col>
          <Col xs="4">
            <h4>Amenities:</h4>
            <div>{this.state.property.amenities}</div>
          </Col>
          <Col xs="4">
            <h4>House Rules:</h4>
            <div>{this.state.property.house_rules}</div>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <div className="calendarBox">
            </div>
          </Col>
          <Col xs="6">
            <div className="makeReservationBox">
              Nightly Price: ${this.state.property.nightly_price}
            </div>
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
