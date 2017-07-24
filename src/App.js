import React, { Component } from 'react';
import './App.css';
import PropertyCard from './components/propertyCard.js';
import ListAllProperties from "./components/ListAllProperties.js"
import NavBar from "./components/NavBar.js"
import FullPropertyDisplay from "./components/FullPropertyDisplay.js"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import "./index.css";
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/"  component={()=> <NavBar />} />
          <Route path="/"  component={()=> <FullPropertyDisplay Property={this.state.property[0]}/>} />
          <Route path="/property/" component={() => <ListAllProperties AllProperties={this.state.property} />} />
        </div>
      </Router>
    )
  }
}

export default App;
