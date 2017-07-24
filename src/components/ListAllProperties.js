import React from "react";
import { Container, Row, Col } from 'reactstrap';
import PropertyCard from './propertyCard.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectProperty} from '../actions/index';


class ListAllProperties extends React.Component {
  renderList(){
    return this.props.properties.map((property, i)=>{
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
      <Container>
        <Row>
          <Col xs='2'>
          </Col>
          <Col xs='10'>
              {this.renderList()}
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
  return bindActionCreators({selectProperty: selectProperty}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAllProperties);
