import React from 'react';
import './Home.css'


class home extends React.Component {

  render() {
    return (
        <div className="charButton">
        <a href="/character">
	    	 <button>Create a character</button> 
        </a>              
        </div>
        
    );
  }
}

export default home