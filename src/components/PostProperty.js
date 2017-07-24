import React from "react";
import { Button, Col, Container, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';


class PostProperty extends React.Component {
  render(){
    return (
      <Container>
        <Col xs={{size: 10, offset:1 }}>
          <div>
            <Form>
              Tell us about your haunt
              <div className="hauntPropBox">
                <FormGroup row>
                  <Label for="title" sm={2}>Property Title</Label>
                  <Col xs={10}>
                  <Input type="text" name="title" placeholder=""/>
                </Col>
              </FormGroup>
                <FormGroup row>
                  <Label for="description" sm={2}>Property description</Label>
                  <Col xs={10}>
                  <Input type="text" name="description" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Photo url" sm={2}>Photo url</Label>
                  <Col xs={10}>
                  <Input type="url" name="Photo url" />
                  </Col>
                </FormGroup>
              </div>
              Let's get some hauting details
              <div className="hauntPropBox">
                <FormGroup row>
                  <Label for="amenities" sm={2}>Amenities</Label>
                  <Col xs={10}>
                  <Input type="text" name="amenities" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="House rules" sm={2}>House rules</Label>
                  <Col xs={10}>
                  <Input type="text" name="House rules" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Nightly price" sm={2}>Nightly price</Label>
                  <Col xs={10}>
                  <Input type="number" name="Nightly price" />
                  </Col>
                </FormGroup>
              </div>
              Where is your haunt?
              <div className="hauntPropBox">
                <FormGroup row>
                  <Label for="Street address" sm={2}>Street address</Label>
                  <Col xs={10}>
                    <Input type="text" name="Street address" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="City" sm={2}>City</Label>
                  <Col xs={10}>
                    <Input type="text" name="City" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="State" sm={2}>State</Label>
                  <Col xs={10}>
                    <Input type="text" name="State" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="Zip" sm={2}>Zip</Label>
                  <Col xs={10}>
                    <Input type="text" name="Zip" />
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

export default PostProperty;
