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
				<h1> Sex </h1>
				<input onChange={this.handleSexChange}>
      	</input>
      	<h1> imageUrl </h1>
      	<input onChange={this.handleimageUrlChange}>
      	</input>
				<h1> Player </h1>
				<input onChange={this.handlePlayerChange}>
      	</input>
      	<h1> Age </h1>
      	<input onChange={this.handleAgeChange}>
      	</input>
				<h1> Height </h1>
				<input onChange={this.handleHeightChange}>
      	</input>
      	<h1> Weight </h1>
      	<input onChange={this.handleWeightChange}>
      	</input>
				<h1> Alignment </h1>
				<input onChange={this.handleAlignmentChange}>
      	</input>
				<h1> Level </h1>
				<input onChange={this.handleLevelChange}>
      	</input>
				<h1> BackGround </h1>
				<input onChange={this.handleBackGroundChange}>
      	</input>
				<h1> Class </h1>
				<input onChange={this.handleClassChange}>
      	</input>
				<h1> Archetipe </h1>
				<input onChange={this.handleArchetipeChange}>
      	</input>
				<h1> Abilities </h1>
				<input onChange={this.handleAbilitiesChange}>
      	</input>
				<h1> Saves </h1>
				<input onChange={this.handleSavesChange}>
      	</input>
				<h1> HitPoints </h1>
				<input onChange={this.handleHitPointsChange}>
      	</input>
				<h1> Languages </h1>
				<input onChange={this.handleLanguagesChange}>
      	</input>
				<h1> Skills </h1>
				<input onChange={this.handleSkillsChange}>
      	</input>
				<h1> Languages </h1>
				<input onChange={this.handleLanguagesChange}>
      	</input>
				<h1> ToolsProfency </h1>
				<input onChange={this.handleToolsProfencencyChange}>
      	</input>
				<h1> WeaponsProfency </h1>
				<input onChange={this.handleWeaponsProfencyChange}>
      	</input>
				<h1> ArmourProfency </h1>
				<input onChange={this.handleArmourProfencyChange}>
      	</input>
      	<button onClick={this.createCharacter}>
      		Submit
      	</button>
      </div>
    );
  }
}

export default home