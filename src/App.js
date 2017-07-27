import React, { Component } from 'react';
import './App.css';
import ListAllProperties from "./containers/ListAllProperties";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import LandingBackground from "./components/LandingBackground";
import FullPropertyDisplay from "./containers/FullPropertyDisplay";
import PostProperty from "./containers/PostProperty";
import Background from "./components/Background";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/bg"  component={NavBar} />
          <Route path="/bg"  component={Background} />
          <Route exact path="/" component={LandingPage} />
          {/* <Route path="/" component={LandingBackground} /> */}
          <Route path="/bg/listallproperties" component={ListAllProperties} />
          <Route path="/bg/postproperty" component={PostProperty} />
          <Route path="/bg/property/:id" component={FullPropertyDisplay} />
        </div>
      </Router>
    )
  }
}

export default App;
