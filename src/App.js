import React, { Component } from 'react';
import './App.css';
import PropertyCard from "./components/PropertyCard.js";
import ListAllProperties from "./components/ListAllProperties.js"
import PostProperty from "./components/PostProperty.js"
import NavBar from "./components/NavBar.js"
import FullPropertyDisplay from "./components/FullPropertyDisplay.js"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import "./index.css"

class App extends Component {
  state = {
    property: [{
      owner_id: 1,
      property_name: 'Haunted Hummus House',
      street_address: '1789 Nutscaping View',
      city: 'Boulder',
      state: 'CO',
      zip_code: 80301,
      photo_url: 'http://www.gafollowers.com/wp-content/uploads/2014/09/haunted_hous1.jpg',
      description: 'This place is haunted as fuck. The ghosts here will scare the falafel out of you. Book here if you got the stones.',
      amenities: 'running water and power',
      nightly_price: 29.99,
      house_rules: 'Keep the noise down.'
    },
    {
      owner_id: 1,
      property_name: 'Haunted Hummus House',
      street_address: '1789 Nutscaping View',
      city: 'Boulder',
      state: 'CO',
      zip_code: 80301,
      photo_url: '',
      description: 'This place is haunted as fuck. The ghosts here will scare the falafel out of you. Book here if you got the stones.',
      amenities: 'running water and power',
      nightly_price: 29.99,
      house_rules: 'Keep the noise down.'
    },
    {
      owner_id: 1,
      property_name: 'Haunted Hummus House',
      street_address: '1789 Nutscaping View',
      city: 'Boulder',
      state: 'CO',
      zip_code: 80301,
      photo_url: '',
      description: 'This place is haunted as fuck. The ghosts here will scare the falafel out of you. Book here if you got the stones.',
      amenities: 'running water and power',
      nightly_price: 29.99,
      house_rules: 'Keep the noise down.'
    },
    {
      owner_id: 1,
      property_name: 'Haunted Hummus House',
      street_address: '1789 Nutscaping View',
      city: 'Boulder',
      state: 'CO',
      zip_code: 80301,
      photo_url: '',
      description: 'This place is haunted as fuck. The ghosts here will scare the falafel out of you. Book here if you got the stones.',
      amenities: 'running water and power',
      nightly_price: 29.99,
      house_rules: 'Keep the noise down.'
    },
    {
      owner_id: 1,
      property_name: 'Haunted Hummus House',
      street_address: '1789 Nutscaping View',
      city: 'Boulder',
      state: 'CO',
      zip_code: 80301,
      photo_url: '',
      description: 'This place is haunted as fuck. The ghosts here will scare the falafel out of you. Book here if you got the stones.',
      amenities: 'running water and power',
      nightly_price: 29.99,
      house_rules: 'Keep the noise down.'
    },
    {
      owner_id: 1,
      property_name: 'Haunted Hummus House',
      street_address: '1789 Nutscaping View',
      city: 'Boulder',
      state: 'CO',
      zip_code: 80301,
      photo_url: '',
      description: 'This place is haunted as fuck. The ghosts here will scare the falafel out of you. Book here if you got the stones.',
      amenities: 'running water and power',
      nightly_price: 29.99,
      house_rules: 'Keep the noise down.'
    },
    {
      owner_id: 1,
      property_name: 'Haunted Hummus House',
      street_address: '1789 Nutscaping View',
      city: 'Boulder',
      state: 'CO',
      zip_code: 80301,
      photo_url: '',
      description: 'This place is haunted as fuck. The ghosts here will scare the falafel out of you. Book here if you got the stones.',
      amenities: 'running water and power',
      nightly_price: 29.99,
      house_rules: 'Keep the noise down.'
    },
    {
      owner_id: 1,
      property_name: 'Haunted Hummus House',
      street_address: '1789 Nutscaping View',
      city: 'Boulder',
      state: 'CO',
      zip_code: 80301,
      photo_url: '',
      description: 'This place is haunted as fuck. The ghosts here will scare the falafel out of you. Book here if you got the stones.',
      amenities: 'running water and power',
      nightly_price: 29.99,
      house_rules: 'Keep the noise down.'
    }]
  }
  render() {
    return (
      <Router>
        <div>
          <Route path="/"  component={()=> <NavBar />} />
          <Route path="/FullPropertyDisplay"  component={()=> <FullPropertyDisplay Property={this.state.property[0]}/>} />
          <Route path="/property/" component={() => <ListAllProperties AllProperties={this.state.property} />} />
          <Route path="/PostProperty" component={() => <PostProperty />} />
        </div>
      </Router>
    )
  }
}

export default App;
