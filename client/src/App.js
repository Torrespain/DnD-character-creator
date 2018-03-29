import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharPage from './components/character/Character';
import Home from './components/home/Home';
import "./App.css";
// import AboutPage from './pages/about';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="{window.location.pathname === '/character' ? characterPage : homePage}">
	      	<Route path="/" component={Home}/>	        	               
          <Route path="/character" component={CharPage}/>
        </div>
      </Router>

    );
  }
}

export default App;

render(){
   const { location } = this.props
   const imgSrc = null

   if(location.pathname == "/" || location.pathname == "/character"){
      imgSrc = "http://dnd.wizards.com/sites/default/files/media/styles/hubpage_banner/public/images/large-background/03_HubHeroR_StarterArt_140722_Optimised_0.png?itok=igt3AwtW"
   }

   else if {
      imgSrc = "https://image.ibb.co/eOEfFS/background2.jpg"
   }

   return (
      { imgSrc && <div ..... > </div>}
   )
   //
}
