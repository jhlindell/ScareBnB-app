import React from "react";
import {Button, Row, Col, Container} from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const API_URL = 'http://localhost:8080/api'

class FullPropertyDisplay extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      property: {},
      owner: {}
    };
  }

  componentDidMount(){
    axios.get(`${API_URL}/properties/${this.props.match.params.id}`)
    .then((property) => {
      this.setState({ property: property.data[0] });
      axios.get(`${API_URL}/users/${this.state.property.owner_id}`)
      .then((user) => {
        this.setState({ owner: user.data[0]});
      });
    });
  }


    componentDidMount() {
        axios.get(`${API_URL}/properties/${this.props.match.params.id}`).then((property) => {
            this.setState({property: property.data[0]});
            axios.get(`${API_URL}/users/${this.state.property.owner_id}`).then((user) => {
                this.setState({owner: user.data[0]});
                console.log(this.state);
            });
        });
    }

    makeReservation = (event) => {
        if (this.state.property.bookedOnHalloween) {
            console.log("already booked");
            console.log(toast('This room has already been booked'));
            return
        }
        event.preventDefault()
        axios.patch(`${API_URL}/properties/${this.props.match.params.id}`, {bookedOnHalloween: true}).then((data) => {
            console.log(data);
            this.setState({property: data.data});
        })
    }

    render() {
        if (!this.state.property.id) {
            return <div>
                Loading...</div>
        }

        return (
            <Container className="fullPropContainer">
                <Row className="fullPropDetails">
                    <Col xs="6">
                        <div className="fullPropDesc">
                            <h3>
                                {this.state.property.property_name}
                            </h3>
                            <p>
                                {this.state.property.description}
                            </p>
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className="fullPropImageDiv">
                            <img className="fullPropImage" src={this.state.property.photo_url} alt="a something should go here" height="200px"></img>
                        </div>
                    </Col>
                </Row>
                <Row className="fullPropDetails">

                    <Col className="fullPropDetsCol" xs="4">
                        <h5>Address:</h5>
                        <div>{this.state.property.street_address}</div>
                        <div>{this.state.property.city}</div>
                        <div>{this.state.property.state}</div>
                        <div>{this.state.property.zip_code}</div>
                    </Col>
                    <Col className="fullPropDetsCol" xs="4">
                        <h5>Amenities:</h5>
                        <div>{this.state.property.amenities}</div>
                    </Col>
                    <Col className="fullPropDetsCol" xs="4">
                        <h5>House Rules:</h5>
                        <div>{this.state.property.house_rules}</div>
                    </Col>

                </Row>
                <Row>
                    <Col>
                      <ToastContainer/>
                        <Button className={`reservationBtn disabled`} onClick={this.makeReservation}>
                            <span className="reservationBtnText">Reserve this room</span>
                        </Button>
                    </Col>
                </Row>
            </Container>

        )
    }
}

function mapStateToProps(state) {
    return {properties: state.properties}
}

// export default withRouter(connect(mapStateToProps)(FullPropertyDisplay));
export default FullPropertyDisplay
