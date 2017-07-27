import React from "react";
import { Container, Row, Button } from 'reactstrap';
import {Link} from 'react-router-dom'


class LandingPage extends React.Component {
  render(){
    return (

          <div className="menubtncontainer">
            <div className="bar"></div>
            <div className="dripwrapper">

              <div className="dripper"></div>
              <div className="drop"></div>
            </div>
          </div>

    );
  }
}


export default LandingPage;
