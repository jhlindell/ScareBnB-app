import React from "react";
import { Container, Row, Button } from 'reactstrap';
import {Link} from 'react-router-dom'


class LandingPage extends React.Component {
  render(){
    return (
      <div>

          <div className="firstSentnace">
              <h5 className="fadeSentance">The only thing scarier than visiting a haunted house is  <span id="living">living</span>  in a haunted house</h5>
              <h5 id="dying"> dying </h5>
          </div>
          <div className="secondSentance">
            <h5>This Halloween, ScareBNB is offering an authentic terror experience with an overnight stay in peer-hosted haunted houses </h5>
          </div>
          



          <div className="menubtncontainer">
            <div className="bar"></div>
            <div className="dripwrapper">
              <div id="bloodtext"> Enter at your own risk</div>
              <div className="dripper"></div>
              <div className="drop"></div>
            </div>
          </div>

</div>
    );
  }
}


export default LandingPage;
