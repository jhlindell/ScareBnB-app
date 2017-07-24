import React, { Component } from 'react';
import './App.css';
import ListAllProperties from "./components/ListAllProperties";
import NavBar from "./components/NavBar";
import FullPropertyDisplay from "./components/FullPropertyDisplay";
import PostProperty from "./components/PostProperty";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/"  component={()=> <NavBar />} />
          <Route exact path="/" component={() => <ListAllProperties />} />
          <Route path="/postproperty" component={() => <PostProperty />} />
        </div>
      </Router>
    )
  }
}

export default App;

// <Route path="/property/"  component={()=> <FullPropertyDisplay />} />
