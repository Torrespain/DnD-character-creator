import React from 'react';

class home extends React.Component {
  constructor(props) {
    super(props);
    	this.state = {
    		// name:"",
    		// race:"",
			// agility:0
		Name: "",
		Image: "",
		Player: "",
		Sex: "",
		Age: "",
		Height: "",
		Weight: "",
		Race: "",
		Alignment: "",
		Experience: "",
		Class: "",
		Archetype: "",
		Level: "",
		Background: "",
		Abilities: "",
		Saves: "",
		Skills: "",
		Armour: "",
		Hitpoints: "",
		Level: "",
		Languages: "",
		Tools: "",
		Weapons: ""
    	}
    	this.handleNameChange = this.handleNameChange.bind(this)
		this.handleImageUrlChange = this.handleImageUrlChange.bind(this)
		this.handlePlayerChange = this.handlePlayerChange.bind(this)
		this.handleSexChange = this.handleSexChange.bind(this)
		this.handleAgeChange = this.handleAgeChange.bind(this)
		this.handleHeightChange = this.handleHeightChange.bind(this)
		this.handleWeightChange = this.handleWeightChange.bind(this)
		this.handleRaceChange = this.handleRaceChange.bind(this)
		this.handleAlignmentChange = this.handleAlignmentChange.bind(this)
    	this.handleExpChange = this.handleExpChange.bind(this)
		this.handleClassChange = this.handleClassChange.bind(this)
		this.handleArchetypeChange = this.handleArchetypeChange.bind(this)
		this.handleLevelChange = this.handleLevelChange.bind(this)
		this.handleBackgroundChange = this.handleBackgroundChange.bind(this)
		this.handleAbilitiesChange = this.handleAbilitiesChange.bind(this)
    	this.handleSavesChange = this.handleSavesChange.bind(this)
		this.handleSkillsChange = this.handleSkillsChange.bind(this)
		this.handleArmourChange = this.handleArmourChange.bind(this)
		this.handleHitPointsChange = this.handleHitPointsChange.bind(this)
		this.handleLanguagesChange = this.handleLanguagesChange.bind(this)
		this.handleToolsChange = this.handleToolsChange.bind(this)
		this.handleWeaponsChange = this.handleWeaponsChange.bind(this)
    	this.createCharacter = this.createCharacter.bind(this)

	}
	handleNameChange(e) {
		// can put name age, etc you can update
		this.setState({name: e.target.value})
		console.log("namechanged")
	}
	handleImageUrlChange(e){
		this.setState({imageurl: e.target.value})
		console.log("ImageChanged")
	}
	handlePlayerChange(e){
		this.setState({player: e.target.value})
		console.log("raceChanged")
	}
	handleSexChange(e){
		this.setState({sex: e.target.value})
		console.log("sexAdded")
	}
	handleAgeChange(e){
		this.setState({age: e.target.value})
		console.log("ageChanged")
	}
	handleHeightChange(e){
		this.setState({height: e.target.value})
		console.log("Heightadded")
	}
	handleWeightChange(e){
		this.setState({weight: e.target.value})
		console.log("WeightAdded")
	}
	handleRaceChange(e){
		this.setState({race: e.target.value})
		console.log("raceChanged")
	}
	handleAlignmentChange(e){
		this.setState({Alignment: e.target.value})
		console.log("AligmentAdded")
	}
	handleExpChange(e){
		this.setState({exp: e.target.value})
		console.log("ExpChanged")
	}
	handleClassChange(e){
		this.setState({class: e.target.value})
		console.log("ClassChanged")
	}
	handleArchetypeChange(e){
		this.setState({Archetype: e.target.value})
		console.log("Archetipechanged")
	}
	handleLevelChange(e){
		this.setState({level: e.target.value})
		console.log("levelChanged")
	}
	handleBackgroundChange(e){
		this.setState({background: e.target.value})
		console.log("backgroundChanged")
	}
	handleAbilitiesChange(e){
		this.setState({abilities: e.target.value})
		console.log("abilitiesChanged")
	}
	handleSavesChange(e){
		this.setState({saves: e.target.value})
		console.log("savesChanged")
	}
	handleSkillsChange(e){
		this.setState({skills: e.target.value})
		console.log("skillsChanged")
	}
	handleArmourChange(e){
		this.setState({armour: e.target.value})
		console.log("armourChanged")
	}
	handleHitPointsChange(e){
		this.setState({hitPoints: e.target.value})
		console.log("HitpointsChanged")
	}
	handleLanguagesChange(e){
		this.setState({languages: e.target.value})
		console.log("languagesChanged")
	}
	handleToolsChange(e){
		this.setState({tools: e.target.value})
		console.log("toolsChanged")
	}
	handleWeaponsChange(e){
		this.setState({weapons: e.target.value})
		console.log("weaponsChanged")
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
  	// console.log(this.state)
  	// console.log(this.state.name)
    return (
      
      <div className="container">

      <div className="row">
        <div className = "col-md-2" id= "subImage">

        </div>
        <div className="col-md-10">

          <div className="row">
            <div className="col-md-6">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Name</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>
           
            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">ImgURL</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>
                
            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Player</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Sex</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Age</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Height</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Weight</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Race</h3>
                  </div>
                  <div className="panel-body">
                    <div class="section-content">
                      <div class="fg-line">
                        <div class="select">
                          <select class="form-control">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Sub Race</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Alignment</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Exp/Level</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Class</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Archtype</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Level</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Background</h3>
                  </div>
                  <div className="panel-body">
        
                  </div>
                </div>
            </div>

          </div>

        </div>
      </div>
      
      	{/*<h1> Name </h1>
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
      	</button>*/}
      </div>


    );
  }
}

export default home