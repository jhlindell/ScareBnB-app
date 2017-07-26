import React from "react";
import { Card,CardText, CardBlock,
  CardTitle, Col, Button } from 'reactstrap';
import {Redirect} from 'react-router-dom';

class PropertyCard extends React.Component {

  render(){
    return (
      <Col xs="12" sm="6" md="4" className="PropertyCardFade">
        <Card className="card">
        <CardBlock className="cardtitle">
          <CardTitle className="scaryText">
            {this.props.property.property_name}
          </CardTitle>
        </CardBlock>
        <div className={`${this.props.property.bookedOnHalloween?  'reservedStamp' : 'none'}`}>Reserved!</div>
        <img width="100%" className="cardImage" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="a something should go here" />
        <CardBlock className="overflow" >
          <CardText >
            {this.props.property.description}
          </CardText>
        </CardBlock>
        <Button className="cardButton" >

          <span className="cardButtonText">
            View more
          </span>
        </Button>
      </Card>
    </Col>
    )
  }
}
{/* <Redirect to={`/properties/${this.props.property.id}`} /> */}

export default PropertyCard;
