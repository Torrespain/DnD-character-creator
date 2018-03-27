import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/character/Character';
import "./App.css";
// import AboutPage from './pages/about';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/character" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
