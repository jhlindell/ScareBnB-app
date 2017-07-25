import React from "react";
import {Row, Col, Container} from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom';


class FullPropertyDisplay extends React.Component {
  constructor(props){
    super(props);
    this.property = {};
  }


  componentDidMount(){

    console.log(this.props);
    const param_id = Number(this.props.match.params.id);
    this.property = this.props.properties.filter(function(element){
      if(element.id == param_id){
        return element;
      }
    })
    console.log(this.property);
  }

  render(){
    if(!this.props.properties){
      return <div> Loading...</div>
    }
    return (
      <Container>
        <Row>
          <Col xs="6">
            <img src={this.property.photo_url} alt="a something should go here" height="200px"></img>
          </Col>
          <Col xs="6">
            <h3>
            {this.property.property_name}
          </h3>
          <div>
            {this.property.description}
          </div>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <h4>Address:</h4>
            <div>{this.property.street_address}</div>
            <div>{this.property.city}</div>
            <div>{this.property.state}</div>
            <div>{this.property.zip_code}</div>
          </Col>
          <Col xs="4">
            <h4>Amenities:</h4>
            <div>{this.property.amenities}</div>
          </Col>
          <Col xs="4">
            <h4>House Rules:</h4>
            <div>{this.property.house_rules}</div>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <div className="calendarBox">
            </div>
          </Col>
          <Col xs="6">
            <div className="makeReservationBox">
              Nightly Price: ${this.property.nightly_price}
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

export default connect(mapStateToProps)(FullPropertyDisplay);
