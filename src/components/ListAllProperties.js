import React from "react";
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import PropertyCard from './propertyCard.js';
import {connect} from 'react-redux';


class ListAllProperties extends React.Component {
  render(){
    return (

      <Container>
        <Row>
          <Col xs='2'>

          </Col>
          <Col xs='10'>

              {this.props.properties.map((property, i)=>{
                return (
                  <PropertyCard key={i} property={property} />
                )
              })}

          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  };
}

export default connect(mapStateToProps)(ListAllProperties);
