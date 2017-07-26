import React from "react";
import { Button, Col, Container, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postProperty} from '../actions/index';
import {Redirect} from 'react-router-dom';

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
      zip_code: '',
      bookedOnHalloween: false,
      submitted: false
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   const { history, properties } = this.props;
  //
  //   if (nextProps.properties.length > properties.length) {
  //     history.push('property/' + properties[properties.length - 1].id)
  //   }
  // }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onFormSubmit(event){
    console.log(this.props);
    event.preventDefault();
    this.props.postProperty(this.state);
    this.setState({
      submitted: true
    });
    console.log(this.props);
  }

  render(){
    if (this.state.submitted) {
      return <Redirect to="/"/>
    }
    return (
      <Container className="postPropertyForm">
        <Col xs={{size: 10, offset:1 }}>
          <div>
            <Form onSubmit={this.onFormSubmit}>
              <h6 className="formDescription">About your haunt</h6>
              <div className="hauntPropBox">
                <FormGroup row>
                  <Label for="property_name" sm={2}>Property Title</Label>
                  <Col xs={10}>
                  <Input
                    className="propertyFormInput"
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
                    className="propertyFormInput"
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
                    className="propertyFormInput"
                    type="url"
                    onChange={(e) => {this.handleInputChange(e)}}
                    value={this.state.photo_url}
                    name="photo_url" />
                  </Col>
                </FormGroup>
              </div>
              <h6 className="formDescription">Frightening features</h6>
              <div className="hauntPropBox">
                <FormGroup row>
                  <Label for="amenities" sm={2}>Amenities</Label>
                  <Col xs={10}>
                  <Input
                    className="propertyFormInput"
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
                    className="propertyFormInput"
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
                    className="propertyFormInput"
                    type="number"
                    onChange={(e) => {this.handleInputChange(e)}}
                    value={this.state.nightly_price}
                    name="nightly_price" />
                  </Col>
                </FormGroup>
              </div>
              <h6 className="formDescription">The doomed location</h6>
              <div className="hauntPropBox">
                <FormGroup row>
                  <Label for="street_address" sm={2}>Street address</Label>
                  <Col xs={10}>
                    <Input
                      className="propertyFormInput"
                      type="text"
                      onChange={(e) => {this.handleInputChange(e)}}
                      value={this.state.street_address}
                      name="street_address" />
                  </Col>
                </FormGroup>
                <FormGroup row>

                  <Col sm={1}></Col>
                  <Label for="city" sm={1}>City</Label>
                  <Col xs={3}>
                    <Input
                      className="propertyFormInput"
                      type="text"
                      onChange={(e) => {this.handleInputChange(e)}}
                      value={this.state.city}
                      name="city" />
                  </Col>

                  <Label for="state" sm={1}>State</Label>
                  <Col xs={2}>
                    <Input
                      className="propertyFormInput"
                      type="text"
                      onChange={(e) => {this.handleInputChange(e)}}
                      value={this.state.state}
                      name="state" />
                  </Col>

                  <Label for="zip" sm={1}>Zip</Label>
                  <Col xs={2}>
                    <Input
                      className="propertyFormInput"
                      type="text"
                      onChange={(e) => {this.handleInputChange(e)}}
                      value={this.state.zip_code}
                      name="zip_code" />
                  </Col>

                </FormGroup>
              </div>
                <Button className="postPropertySubmit"><span className="propSubmitBtnText">Submit</span></Button>
           </Form>
          </div>
        </Col>
      </Container>
    )
  }
}

function mapStateToProps(state){
  return {
    properties: state.properties
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {postProperty: postProperty, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostProperty);
