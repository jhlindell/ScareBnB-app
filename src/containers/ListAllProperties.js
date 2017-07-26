import React from "react";
import { Container, Row, Col } from 'reactstrap';
import PropertyCard from '../components/propertyCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectProperty} from '../actions/index';
import {getAllProperties} from '../actions/index';


class ListAllProperties extends React.Component {
  componentDidMount() {
    this.props.getAllProperties();
  }

  renderList(){
    if(!this.props.properties){
      return <div>loading</div>
    }
    return this.props.properties.map((property, i)=>{
      console.log(property);
      return (
        <PropertyCard
          key={i}
          selectProperty={this.props.selectProperty}
          property={property}
        />
      )
    });
  }

  render(){
    return (
      <Container className="ListAllProperties">
        <Row>
          <Col xs='2'>
          </Col>
          <Col xs='10'>
            <Row>
              {this.renderList()}
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    properties: state.properties
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {selectProperty: selectProperty, getAllProperties: getAllProperties}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAllProperties);
