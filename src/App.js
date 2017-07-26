import React, { Component } from 'react';
import './App.css';
import ListAllProperties from "./containers/ListAllProperties";
import NavBar from "./components/NavBar";
import FullPropertyDisplay from "./containers/FullPropertyDisplay";
import PostProperty from "./components/PostProperty";
import UserProfile from "./components/UserProfile";
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
          <Route path="/fullproperty" component={() => <FullPropertyDisplay />} />
          <Route path="/userprofile" component={() => <UserProfile />} />
=======
          <Route path="/"  component={NavBar} />
          <Route path="/"  component={Background} />
          <Route exact path="/" component={ListAllProperties} />
          <Route path="/postproperty" component={PostProperty} />
          <Route path="/property/:id" component={FullPropertyDisplay} />
>>>>>>> 57dddb8af829206de954a0409e5a34d0d211fa11
        </div>
      </Router>
    )
  }
}

export default App;
