import React from "react";
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle, Row, Col, Container} from 'reactstrap';



class FullPropertyDisplay extends React.Component {
  render(){
    return (
      <Container>
        <Row>
          <Col xs="6">
            <img src={this.props.Property.photo_url} height="200px"></img>
          </Col>
          <Col xs="6">
            <h3>
            {this.props.Property.property_name}
          </h3>
          <div>
            {this.props.Property.description}
          </div>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <h4>Address:</h4>
            <div>{this.props.Property.street_address}</div>
            <div>{this.props.Property.city}</div>
            <div>{this.props.Property.state}</div>
            <div>{this.props.Property.zip_code}</div>
          </Col>
          <Col xs="4">
            <h4>Amenities:</h4>
            <div>{this.props.Property.amenities}</div>
          </Col>
          <Col xs="4">
            <h4>House Rules:</h4>
            <div>{this.props.Property.house_rules}</div>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <div className="calendarBox">

            </div>
          </Col>
          <Col xs="6">
            <div className="makeReservationBox">
              Nightly Price: ${this.props.Property.nightly_price}
            </div>
          </Col>
        </Row>

      </Container>

    )
  }
}

export default FullPropertyDisplay;
