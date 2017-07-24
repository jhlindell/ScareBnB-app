import React from "react";
import { Card,CardText, CardBlock,
  CardTitle, CardSubtitle } from 'reactstrap';

class PropertyCard extends React.Component {

  render(){
    return (
        <Card onClick={() => {
          this.props.selectProperty(this.props.property)
        }
        }
       className="PropertyCard">
        <CardBlock>
          <CardTitle>{this.props.property.property_name}</CardTitle>
          <CardSubtitle>{this.props.property.street_address}</CardSubtitle>
        </CardBlock>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="a something should go here" />
        <CardBlock>
          <CardText>{this.props.property.description}</CardText>
        </CardBlock>
      </Card>
    )
  }
}

export default PropertyCard;
