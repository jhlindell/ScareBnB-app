import React from "react";
import { Button, Col, Container, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class UserProfile extends React.Component {

  render(){
    return (
      <Container className="profileForm">
        <Col xs={{size: 10, offset:1 }}>
          <div>
            <Form onSubmit={this.onFormSubmit}>
              <div className="hauntPropBox">
                <FormGroup row>
                  <Label for="property_name" sm={2}>First name</Label>
                  <Col xs={10}>
                  <Input
                    className="propertyFormInput"
                    type="text"
                    name="property_name"
                    placeholder=""/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="description" sm={2}>Last name</Label>
                  <Col xs={10}>
                    <Input
                      className="propertyFormInput"
                      type="text"
                      name="description" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="property_name" sm={2}>Email</Label>
                  <Col xs={10}>
                  <Input
                    className="propertyFormInput"
                    type="text"
                    name="property_name"
                    placeholder=""/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="description" sm={2}>Phone</Label>
                  <Col xs={10}>
                    <Input
                      className="propertyFormInput"
                      type="text"
                      name="description" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="street_address" sm={2}>Street address</Label>
                  <Col xs={10}>
                    <Input
                      className="propertyFormInput"
                      type="text"
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
                      name="city" />
                  </Col>
                  <Label for="state" sm={1}>State</Label>
                  <Col xs={2}>
                    <Input
                      className="propertyFormInput"
                      type="text"
                      name="state" />
                  </Col>
                  <Label for="zip" sm={1}>Zip</Label>
                  <Col xs={2}>
                    <Input
                      className="propertyFormInput"
                      type="text"
                      name="zip_code" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="amenities" sm={2}>Photo url</Label>
                  <Col xs={10}>
                    <Input
                      className="propertyFormInput"
                      type="text"
                      name="amenities" />
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

export default UserProfile;
