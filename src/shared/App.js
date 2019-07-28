import React, { Component } from "react";
import "./App.css";
import Profile from './Profile.js'

class App extends Component {
  render() {
    return (
      <div style={{width:"1000px",height:"1000px"}}>
      <Profile/>
      </div>
    );
  }
}

export default App;
