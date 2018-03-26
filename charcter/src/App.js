import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './page/homepage';
// import AboutPage from './pages/about';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/home" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
