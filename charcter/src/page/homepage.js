import React from 'react';

class home extends React.Component {
  constructor(props) {
    super(props);
    	this.state = {
    		name:"",
    		race:"",
    		agility:0
    	}
    	this.handleNameChange = this.handleNameChange.bind(this)
    	this.handleRaceChange = this.handleRaceChange.bind(this)
    	this.createCharacter = this.createCharacter.bind(this)
	}
	handleNameChange(e) {
		// can put name age, etc you can update
		this.setState({name: e.target.value})
		console.log("namechanged")
	}
	handleRaceChange(e){
		this.setState({race: e.target.value})
		console.log("raceChanged")
	}
	createCharacter() {
		let newCharacter = this.state
		if(this.state.race === "orc"){
			newCharacter.agility= -2
		}
		console.log("hello", newCharacter)
	}
	// handleAgiChange(e){
  	// 	this.setState({agility: })
  	// }

  //component, with react/ bootstrap
  render() {
  	console.log(this.state)
  	console.log(this.state.name)
    return (
      <div>
      	<h1> Name </h1>
      	<input onChange={this.handleNameChange}>
      	</input>
      	<h1> Race </h1>
      	<input onChange={this.handleRaceChange}>
      	</input>
      	<button onClick={this.createCharacter}>
      		Submit
      	</button>
      </div>
    );
  }
}

export default home