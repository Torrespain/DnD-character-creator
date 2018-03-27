import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CharPage from './components/character/Character';
import Home from './components/home/Home';
import "./App.css";
// import AboutPage from './pages/about';


class App extends Component {
	// constructor() {
	//     super();
	//     this.state = {
	//       charView: false
	//     }
	//     this.createText = this.createText.bind(this);
	// }

	// createText() {
 //    	this.setState({ charView: true }) 
 //  	}


// <button onClick={this.createText}>Create a character</button>
// 	        {this.state.charView && <p>works!!!</p>}
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
