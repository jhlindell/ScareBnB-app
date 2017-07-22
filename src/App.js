import React, { Component } from 'react';
import './App.css';
import Property from './components/property.js';

class App extends Component {
  state = {
    property: {
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
        }
  }
  render() {
    return (
      <div>
        <h1>Whassssssup World?</h1>
        <Property property={this.state.property}/>
      </div>
    )
  }
}

export default App;