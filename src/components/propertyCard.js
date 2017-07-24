import React from "react";
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';



class PropertyCard extends React.Component {
  render(){
    return (


      <Card className="PropertyCard">
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBlock>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBlock>
          <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBlock>
      </Card>




    )
  }
}

export default PropertyCard;


/* <div>
  <p className="midnightBlue">{this.props.property.property_name}</p>
  <p className="midnightBlue">{this.props.property.street_address}</p>
  <p className="midnightBlue">{this.props.property.city}</p>
  <p className="midnightBlue">{this.props.property.state}</p>
  <p className="midnightBlue">{this.props.property.zip_code}</p>
  <p className="midnightBlue">{this.props.property.description}</p>
</div> */
