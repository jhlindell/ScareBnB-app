import React from "react";
import { Container, Row, Button } from 'reactstrap';
import {Link} from 'react-router-dom'

class LandingPage extends React.Component {
  render(){
    return (
      <div>
        <div className="firstSentnace">
            <h5 className="fadeSentance">The only thing scarier than visiting a haunted house is  <span id="living">living</span> <span id="dying"> dying </span> in a haunted house</h5>
        </div>
        <div className="secondSentance">
          This Halloween, ScareBnB is offering an authentic terror experience with an overnight stay in peer-hosted haunted houses
        </div>
        <div className="menubtncontainer">
          <div className="bar"></div>
          <div className="dripwrapper">
            <div><Link to="/bg/listallproperties" className="bloodtext">Enter at your own risk</Link> </div>
            <div className="dripper"></div>
            <div className="drop"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingPage;
