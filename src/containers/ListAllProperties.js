import React from "react";
import {
  Row,
  Col,
} from 'reactstrap';
import PropertyCard from '../components/propertyCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectProperty} from '../actions/index';
import {getAllProperties} from '../actions/index';
import $ from 'jquery';
require('jquery.transit');

class ListAllProperties extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  componentDidMount() {
    this.props.getAllProperties();
    this.spinInterval();
  }

  renderList() {
    if (!this.props.properties) {
      return <div>loading</div>
    }
    return this.props.properties.map((property, i) => {
      return (<PropertyCard key={i} selectProperty={this.props.selectProperty} property={property}/>)
    });
  }

  spinInterval(){
    setInterval(spinDollHead, 2000)
  }

  render() {
    return (

      <Container-fluid className="ListAllProperties">
        <Row className="cardHolder">
          <Col xs='2'>
            <img id="dollhead"
              width="150px;"
              src="/images/scarydoll-head.png"
              alt="scary doll"/>
            <img id="dollbody"
              width="150px;"
              src="/images/scarydoll-body.png"
              alt="scary doll"/>
          </Col>
          <Col xs='9'>
            <Row>
              {this.renderList()}
            </Row>
          </Col>
        </Row>
      </Container-fluid>
    )
  }
}

function mapStateToProps(state) {
  return {properties: state.properties};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectProperty: selectProperty,
    getAllProperties: getAllProperties
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAllProperties);

function randomMove(){
  if(Math.random() > 0.5){
    return Math.ceil(Math.random() * 360) + "deg";
  } else {
    return Math.ceil(Math.random() * -360) + "deg";
  }
}

function spinDollHead(){
  let rotation = randomMove();
  $("#dollhead").transition({rotate: rotation}, 2000);
}

//we'll use this later
{/* <div className="filterBox">
  <Form>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="exampleEmail" onChange={(e) => {
        this.handleInputChange(e)
      }} placeholder="with a placeholder"/>
    </FormGroup>
  </Form>
</div> */}
