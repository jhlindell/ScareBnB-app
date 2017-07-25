import React from "react";
import { Card,CardText, CardBlock,
  CardTitle, CardSubtitle, Col, Button } from 'reactstrap';

class PropertyCard extends React.Component {

  description(){
    let words = this.props.property.description.split('').map(function(element,index){
      if(index<100){
        return element
      };
    })
    words.join(',')
    console.log(words);
    return words
  }

  render(){
    return (
      <Col xs="12" sm="6" md="4" className="PropertyCardFade">
        <Card className="card" onClick={() => {
          this.props.selectProperty(this.props.property)
        }
        }
       className="PropertyCard">
        <CardBlock className="cardtitle">
          <CardTitle>{this.props.property.property_name}</CardTitle>
        </CardBlock>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="a something should go here" />
        <CardBlock className="overflow" >
          <CardText >{this.props.property.description}</CardText>
        </CardBlock>
        <Button className="cardButton">
          <span className="cardButtonText">
          View more
        </span>
        </Button>
      </Card>
    </Col>
    )
  }
}

export default PropertyCard;
