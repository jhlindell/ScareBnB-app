import React from "react";

class Property extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.property.property_name}</p>
        <p>{this.props.property.street_address}</p>
        <p>{this.props.property.city}</p>
        <p>{this.props.property.state}</p>
        <p>{this.props.property.zip_code}</p>
        <p>{this.props.property.description}</p>
      </div>
    )
  }
}

export default Property;
