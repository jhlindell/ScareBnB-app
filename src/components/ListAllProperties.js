import React from "react";
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import PropertyCard from './PropertyCard.js';



class ListAllProperties extends React.Component {
  render(){
    return (

      <Container>
        <Row>
          <Col xs='2'>

          </Col>
          <Col xs='10'>
            <Col xs="12">
              {this.props.AllProperties.map((el, i)=>{
                return (
                  <PropertyCard key={i} property={el} />
                )
              })}
            </Col>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ListAllProperties;
