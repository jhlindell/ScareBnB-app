import React, { Component } from 'react';
import './App.css';
import ListAllProperties from "./containers/ListAllProperties";
import NavBar from "./components/NavBar";
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
<<<<<<< HEAD
          <Route path="/"  component={()=> <NavBar />} />
          <Route path="/"  component={()=> <Background />} />
          <Route exact path="/" component={() => <ListAllProperties />} />
          <Route path="/postproperty" component={() => <PostProperty />} />
          <Route path="/property/"  component={()=> <FullPropertyDisplay />} />
=======
          <Route path="/"  component={NavBar} />
          <Route path="/"  component={Background} />
          <Route exact path="/" component={ListAllProperties} />
          <Route path="/postproperty" component={PostProperty} />
          <Route path="/property/:id" component={FullPropertyDisplay} />
>>>>>>> 317a1d6c303c2cb54233d620314a5aa7df360f43
        </div>
      </Router>
    )
  }
}

export default App;
