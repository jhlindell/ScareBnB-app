import React, { Component } from 'react';
import './App.css';
import PropertyCard from './components/propertyCard.js';
import ListAllProperties from "./components/ListAllProperties.js"
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
          <h1>Nav Links:</h1>
          <NavBar />
          <Link to="/" >Home</Link>
          <Route path="/" component={()=> <NavBar />} />
          <Route path="/property/" component={() => <ListAllProperties />} />
        </div>
      </Router>
    )
  }
}

export default App;

<Link to="/property" >Properties</Link>
