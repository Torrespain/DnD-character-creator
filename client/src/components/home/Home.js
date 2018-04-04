import React from 'react';
import './Home.css'


class home extends React.Component {

  render() {
    return (
		<div className="home-container">
	       <div className="main">
	           <div>
	                 <h1>Dungeons & Dragons</h1>
	                 <p>Create Your Character</p>
	            </div>
	             <div>
	                 <img src='https://i.imgur.com/JFWynYP.gif' />
	             </div>
	             <a class="btn btn-primary btn-lg" href="/character" role="button">Create</a>
	         </div>
	    </div>         
    );
  }
}

export default home