import React from "react";
import { Button, Col, Container, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postProperty} from '../actions/index';

class PostProperty extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      owner_id: 1,
      property_name: '',
      description: '',
      photo_url: '',
      amenities: '',
      house_rules: '',
      nightly_price: '',
      street_address: '',
      city: '',
      state: '',
      zip_code: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onFormSubmit(event){
    event.preventDefault();
    var result = postProperty(this.state);
    console.log(result, "from post property");

  }

  render(){
    return (
      <Container>
        <Col xs={{size: 10, offset:1 }}>
          <div>
            <Form onSubmit={this.onFormSubmit}>
              Tell us about your haunt
              <div className="hauntPropBox">
                <FormGroup row>
                  <Label for="property_name" sm={2}>Property Title</Label>
                  <Col xs={10}>
                  <Input
                    type="text"
                    name="property_name"
                    onChange={(e) => {this.handleInputChange(e)}}
                    value={this.state.property_name}
                    placeholder=""/>
                </Col>
              </FormGroup>
                <FormGroup row>
                  <Label for="description" sm={2}>Property description</Label>
                  <Col xs={10}>
                  <Input
                    type="text"
                    onChange={(e) => {this.handleInputChange(e)}}
                    value={this.state.description}
                    name="description" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Photo url" sm={2}>Photo url</Label>
                  <Col xs={10}>
                  <Input
                    type="url"
                    onChange={(e) => {this.handleInputChange(e)}}
                    value={this.state.photo_url}
                    name="photo_url" />
                  </Col>
                </FormGroup>
              </div>
              Let's get some haunting details
              <div className="hauntPropBox">
                <FormGroup row>
                  <Label for="amenities" sm={2}>Amenities</Label>
                  <Col xs={10}>
                  <Input
                    type="text"
                    onChange={(e) => {this.handleInputChange(e)}}
                    value={this.state.amenities}
                    name="amenities" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="house_rules" sm={2}>House rules</Label>
                  <Col xs={10}>
                  <Input
                    type="text"
                    onChange={(e) => {this.handleInputChange(e)}}
                    value={this.state.house_rules}
                    name="house_rules" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="nightly_price" sm={2}>Nightly price</Label>
                  <Col xs={10}>
                  <Input
                    type="number"
                    onChange={(e) => {this.handleInputChange(e)}}
                    value={this.state.nightly_price}
                    name="nightly_price" />
                  </Col>
                </FormGroup>
              </div>
              Where is your haunt?
              <div className="hauntPropBox">
                <FormGroup row>
                  <Label for="street_address" sm={2}>Street address</Label>
                  <Col xs={10}>
                    <Input
                      type="text"
                      onChange={(e) => {this.handleInputChange(e)}}
                      value={this.state.street_address}
                      name="street_address" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="city" sm={2}>City</Label>
                  <Col xs={10}>
                    <Input
                      type="text"
                      onChange={(e) => {this.handleInputChange(e)}}
                      value={this.state.city}
                      name="city" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="state" sm={2}>State</Label>
                  <Col xs={10}>
                    <Input
                      type="text"
                      onChange={(e) => {this.handleInputChange(e)}}
                      value={this.state.state}
                      name="state" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="zip" sm={2}>Zip</Label>
                  <Col xs={10}>
                    <Input
                      type="text"
                      onChange={(e) => {this.handleInputChange(e)}}
                      value={this.state.zip_code}
                      name="zip_code" />
                  </Col>
                </FormGroup>
              </div>
                <Button>Submit</Button>
           </Form>
          </div>
        </Col>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {postProperty: postProperty}, dispatch);
}

export default connect(null, mapDispatchToProps)(PostProperty);
