import React from "react";
import {
  Container,
  Input,
  Label,
  Row,
  Col,
  Form,
  FormGroup
} from 'reactstrap';
import PropertyCard from '../components/propertyCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectProperty} from '../actions/index';
import {getAllProperties} from '../actions/index';

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
  }

  renderList() {
    if (!this.props.properties) {
      return <div>loading</div>
    }
    return this.props.properties.map((property, i) => {
      return (<PropertyCard key={i} selectProperty={this.props.selectProperty} property={property}/>)
    });
  }

  render() {
    return (

      <Container-fluid className="ListAllProperties">
        <Row className="cardHolder">
          <Col xs='2'></Col>
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
