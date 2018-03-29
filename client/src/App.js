import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharPage from './components/character/Character';
import Home from './components/home/Home';
import "./App.css";
// import AboutPage from './pages/about';

class App extends Component {

    wrap () {
      let imgSrc = null;
    if(window.location.pathname === "/" || window.location.pathname === "/home"){
      imgSrc = "http://dnd.wizards.com/sites/default/files/media/styles/hubpage_banner/public/images/large-background/03_HubHeroR_StarterArt_140722_Optimised_0.png?itok=igt3AwtW"
    }
   else if (window.location.pathname === "/character"){
      imgSrc = "https://image.ibb.co/eOEfFS/background2.jpg"
   }
   else {

      }
   }

  render() {
    return (
      <div>
      {this.wrap()}

      <Router>
        <div>
	      	<Route exact path="/" component={Home}/>	        	               
          <Route exact path="/character" component={CharPage}/>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
