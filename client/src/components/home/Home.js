import React from 'react';
import './Home.css'


class home extends React.Component {

  render() {
  	// document.body.style.backgroundImage = `url("/../images/background1.png")`
    return (
    	<div>
    	<div className="text-container">
    			<div>
	                 <h1>Dungeons & Dragons</h1>
	                 <p>Character Creator</p>
	                 <a className="btn btn-primary btn-lg" href="/character" role="button">Create</a>
	            </div>
    	</div>

		<div className="home-container">
	       <div className="main">
	           
	             <div>
	                 <img src="/../images/gif.gif" />
	             </div>
	             
	         </div>
	    </div>
	    </div>      
    );
  }
}

export default home