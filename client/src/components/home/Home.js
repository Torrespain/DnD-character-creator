import React from 'react';
import './Home.css'


class home extends React.Component {

  render() {
    return (
    	<div className="welcome">
  			<h1>Dungeons & Dragons</h1>
  				<p>Create Your Character</p>
  				<p><a class="btn btn-primary btn-lg" href="#" role="button">Create</a></p>
  				<img src = "https://i.imgur.com/JFWynYP.gif" />
		</div>
    );
  }
}

export default home