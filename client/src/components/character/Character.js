import React from 'react';
import './Character.css'

class Home extends React.Component {
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
      
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange = event => {
    console.log("i was a clicked");
    const { name, value } = event.target
    this.setState({[name]: value});
    console.log(event.target.value);
  }




  
  render() {
  	// console.log(this.state)
  	// console.log(this.state.name)
    return (
      
      <div className="container">

      <div className="row">
        <div className = "col-md-2" >
         <img class="dragonSide" src="https://image.ibb.co/h6Wxun/6477_dragon_cave.jpg"></img>
        </div>
          
        <div className="col-md-10">

          <div className="row">
            <div className="col-md-6">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Name</h3>
                  </div>
                  <div className="panel-body">
                      
                    <input onChange={this.handleChange} type="text" className="form-control" name="Name" value={this.state.Name} placeholder="Name"/>

                  </div>
                </div>
            </div>
           
            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">ImgURL</h3>
                  </div>
                  <div className="panel-body">
                    <input type="text" class="form-control" onChange={this.handleChange} name="Image" value={this.state.Image} placeholder="imageurl" />
                  </div>
                </div>
            </div>
                
            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Player</h3>
                  </div>
                  <div className="panel-body">
                    <input type="text" class="form-control" onChange={this.handleChange} name="Player" value={this.state.Player} placeholder="player"/>
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
                    <div class="section-content">
                      <div class="fg-line">
                        <div class="select">
                          <select class="form-control">
                            <option value="" defaultValue>Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
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
                      <h3 className="panel-title">Age</h3>
                  </div>
                  <div className="panel-body">
                    <input type="text" class="form-control" onChange={this.handleChange} name="Age" value={this.state.Age} placeholder="Age" />
                  </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Height</h3>
                  </div>
                  <div className="panel-body">
                    <input type="text" class="form-control" onChange={this.handleChange} name="Height" value={this.state.Height} placeholder="Height"/>
                  </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <h3 className="panel-title">Weight</h3>
                  </div>
                  <div className="panel-body">
                    <input type="text" class="form-control" onChange={this.handleChange} name="Weight" value={this.state.Weight} placeholder="Weight"/>
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
                    <div className="section-content">
                      <div className="fg-line">
                        <div className="select">
                          <select className="form-control" readOnly onChange={event=>this.handleChange(event)}>
                            <option value="default" defaultValue >Race</option>
                            <option id="6" value="Dragonborn">Dragonborn</option>
                            <option id="1" value="Dwarf">Dwarf</option>
                            <option id="3" value="Elf">Elf</option>
                            <option id="7" value="Gnome">Gnome</option>
                            <option id="8" value="Half-Elf">Half-Elf</option>
                            <option id="9" value="Half-Orc">Half-Orc</option>
                            <option id="4" value="Halfling">Halfling</option>
                            <option id="5" value="Human">Human</option>
                            <option id="2" value="Tiefling">Tiefling</option>
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
                    <div class="section-content">
                      <div class="fg-line">
                        <div class="select">
                          <select class="form-control">
                            <option value="" defaultValue>Alignment</option>
                            <option value="LawfulGood">Lawful Good</option>
                            <option value="LawfulNeutral">Lawful Neutral</option>
                            <option value="LawfulEvil">Lawful Evil</option>
                            <option value="NeutralGood">Neutral Good</option>
                            <option value="NeutralNeutral">Neutral Neutral</option>
                            <option value="NeutralEvil">Neutral Evil</option>
                            <option value="ChaoticGood">Chaotic Good</option>
                            <option value="ChaoticNeutral">Chaotic Neutral</option>
                            <option value="ChaoticEvil">Chaotic Evil</option>
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
                    <div class="section-content">
                      <div class="fg-line">
                        <div class="select">
                          <select class="form-control" placeholder="choose one">
                            <option value="" defaultValue>Class</option>
                            <option value="Barbarian">Barbarian</option>
                            <option value="Bard">Bard</option>
                            <option value="Cleric">Cleric</option>
                            <option value="Druid">Druid</option>
                            <option value="Fighter">Fighter</option>
                            <option value="Monk">Monk</option>
                            <option value="Paladin">Paladin</option>
                            <option value="Ranger">Ranger</option>
                            <option value="Rogue">Rogue</option>
                            <option value="Sorcerer">Sorcerer</option>
                            <option value="Warlock">Warlock</option>
                            <option value="Wizard">Wizard</option>
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
      <div className ="row">

<div className ="col-md-4">
<div className="card" style={{width: 230}}>
<div className="card-header">
  Abilities
</div>
<ul className="list-group list-group-flush">
  <li className="list-group-item">Strength</li>
  <li className="list-group-item">Dexterity</li>
  <li className="list-group-item">Constitution</li>
  <li className="list-group-item">Intelligence</li>
  <li className="list-group-item">Wisdom</li>
  <li className="list-group-item">Charisma</li>
</ul>
</div>
</div>

<div className ="col-md-4">
<div className = "section-header">
<label>Saves</label>
</div>
<div className="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Strength" aria-label="Text input with checkbox"></input> 
</div>
<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder ="Dexterity" aria-label="Text input with checkbox"></input> 
</div>
<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Consitution" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Intelligence" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Wisdom" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Charisma" aria-label="Text input with checkbox"></input> 
</div>




<div className = "section-header">
<label>Skills</label>
</div>
<div className="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Acrobatics" aria-label="Text input with checkbox"></input> 
</div>
<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder ="Animal-Handling" aria-label="Text input with checkbox"></input> 
</div>
<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Arcana" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Athletics" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Deception" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="History" aria-label="Text input with checkbox"></input> 
</div> 

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Insight" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Intimidation" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Investigation" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Medicine" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Nature" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Perception" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Performance" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Persuation" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Religion" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Sleight of Hand" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Stealth" aria-label="Text input with checkbox"></input> 
</div>

<div className ="input-group mb-3">
<div className="input-group-prepend">
<div className="input-group-text">
  <input type="checkbox" aria-label="Checkbox for following text input"></input>

</div>
</div>
<input type="text" className="form-control" placeholder="Survival" aria-label="Text input with checkbox"></input> 
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
    </div>
  </div>

    );
  }
}

export default Home