import React from 'react';
import './Character.css'
import Skills from './skills'

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
      Abilities: null,
      diceAbilities: {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0},
      raceAbilities: null,
      Saves: "",
      Skills: [],
      Armour: "",
      Hitpoints: "",
      Level: "",
      Languages: "",
      Exotic: "",
      Tools: "",
      Weapons: "",
      Gaming: "",
      Instrument: "",
      Vehicles: "",
      Other: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.updateSkills = this.updateSkills.bind(this)
  }

  updateSkills (newSkills) {
    this.setState ({Skills: newSkills})
  }

  handleChange = event => {
    
    // console.log("i was a clicked");
    const { name, value } = event.target
    this.setState({ [name]: value });
    // console.log(event.target.value);
  }

 diceRoll = () => {
   var abilitiesObj = {strength: "", dexterity: "", constitution: "", intelligence: "", wisdom: "", charisma: ""}
    
    for (let key in abilitiesObj) {
            console.log("key: ", key);
        let totalArray= [];
        let total=0;
        while (totalArray.length < 4) {
            let roll = Math.floor(Math.random()*6)+1;
            while (roll===1) {
                roll = Math.floor(Math.random()*6)+1;
            }
            totalArray.push(roll);
        }
        console.log(totalArray);
        totalArray.sort();
        totalArray.shift();
        console.log(totalArray)

        for (let j = 0; j < totalArray.length; j++) {
            total = total + totalArray[j];
        }
        console.log(total);
        abilitiesObj[key]=total;

    }
    this.setState({diceAbilities:abilitiesObj});

    console.log(abilitiesObj);
}     



  render() {
    console.log(this.state)
    // console.log(this.state.name)
    return (

      <div className="container">

        <div className="row">
          <div className="col-md-2" >
            <img className="dragonSide" src="https://image.ibb.co/gDLFFS/db4c8feee54b432773d15cd2e2ccd026_d9574e0.jpg"></img>
          </div>

          <div className="col-md-10">

            <div className="row">
              <div className="col-md-6">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Name</h3>
                  </div>
                  <div className="panel-body">

                    <input onChange={this.handleChange} type="text" className="form-control" name="Name" value={this.state.Name} placeholder="Name" />

                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">ImgURL</h3>
                  </div>
                  <div className="panel-body">
                    <input type="text" className="form-control" onChange={this.handleChange} name="Image" value={this.state.Image} placeholder="imageurl" />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Player</h3>
                  </div>
                  <div className="panel-body">
                    <input type="text" className="form-control" onChange={this.handleChange} name="Player" value={this.state.Player} placeholder="player" />
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
                    <div className="section-content">
                      <div className="fg-line">
                        <div className="select">
                          <select className="form-control" readOnly onChange={this.handleChange} name="Sex" value={this.state.Sex} placeholder="Sex" >
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
                    <input type="text" className="form-control" onChange={this.handleChange} name="Age" value={this.state.Age} placeholder="Age" />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Height</h3>
                  </div>
                  <div className="panel-body">
                    <input type="text" className="form-control" onChange={this.handleChange} name="Height" value={this.state.Height} placeholder="Height" />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Weight</h3>
                  </div>
                  <div className="panel-body">
                    <input type="text" className="form-control" onChange={this.handleChange} name="Weight" value={this.state.Weight} placeholder="Weight" />
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
                          <select className="form-control" readOnly onChange={this.handleChange} name="Race" value={this.state.Race} placeholder="Race" >
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
                    <div className="section-content">
                      <div className="fg-line">
                        <div className="select">
                          <select className="form-control" readOnly onChange={this.handleChange} name="Alignment" value={this.state.Alignment} placeholder="Alignment">
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
                    <div className="section-content">
                      <div className="fg-line">
                        <div className="select">
                          <select className="form-control" readOnly onChange={this.handleChange} name="Class" value={this.state.Class} placeholder="Class">
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
          <div className="panel panel-default">
            <div className="panel-heading">
              <label>Abilities</label>
              <button type="button" id="abilitiesDice" className="btn btn-default" onClick={this.diceRoll}>Roll the dice!</button>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Strength: {this.state.diceAbilities.strength}</li>
              <li className="list-group-item">Dexterity: {this.state.diceAbilities.dexterity}</li>
              <li className="list-group-item">Constitution: {this.state.diceAbilities.constitution}</li>
              <li className="list-group-item">Intelligence: {this.state.diceAbilities.intelligence}</li>
              <li className="list-group-item">Wisdom: {this.state.diceAbilities.wisdom}</li>
              <li className="list-group-item">Charisma: {this.state.diceAbilities.charisma}</li>
            </ul>
          </div>
          <div className = "panel panel-default">
          <div className = "panel-heading">
            <label>Saving Throws</label>
          </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox" aria-label="Checkbox for following text input"></input> Strength</li>
              <li className="list-group-item"><input type="checkbox" aria-label="Checkbox for following text input"></input> Dexterity</li>
              <li className="list-group-item"><input type="checkbox" aria-label="Checkbox for following text input"></input> Constitution</li>
              <li className="list-group-item"><input type="checkbox" aria-label="Checkbox for following text input"></input> Intelligence</li>
              <li className="list-group-item"><input type="checkbox" aria-label="Checkbox for following text input"></input> Wisdom</li>
              <li className="list-group-item"><input type="checkbox" aria-label="Checkbox for following text input"></input> Charisma</li>
            </ul>
          </div>
          <div className="panel panel-default">
              <div className="panel-heading">
                <label className="panel-title">Weapon Proficiencies</label>
              </div>
              <div className="panel-body">
      
              </div>
          </div>
          <div className="panel panel-default">
              <div className="panel-heading">
                <label className="panel-title">Armour Proficiencies</label>
              </div>
              <div className="panel-body">
      
              </div>
          </div>
        </div>
     
        <div className ="col-md-4">
          <div className="panel panel-default">
            <div className="panel-heading">
            <label>
              Skills
            </label>
            </div>
            <Skills class={this.state.Class} Skills={this.state.Skills} updateSkills={this.updateSkills}/>
        </div>
      </div>
   
       <div className="col-md-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <label className="panel-title">Hit Points</label>
                      <button type="button" id="HitDice" className="btn btn-default">Roll the dice!</button>
                  </div>
                  <div className="panel-body">
                  </div>
                </div>

                
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <label className="panel-title">Languages</label>
                  </div>
                  <div className="panel-body">
                      <div className="fg-line">
                      <label>Common</label>
                        <div className="select">
                          <select className="form-control" readOnly onChange={this.handleChange} name="Languages" value={this.state.Languages} placeholder="Languages">
                            <option value="" disabled defaultValue>Languages</option>
                            <option value="Common">Common</option>
                            <option value="Dwarvish">Dwarvish</option>
                            <option value="Elvish">Elvish</option>
                            <option value="Giant">Giant</option>
                            <option value="Gnomish">Gnomish</option>
                            <option value="Goblin">Goblin</option>
                            <option value="Halfing">Halfling</option>
                            <option value="Orc">Orc</option>
                          </select>
                        </div>

                        <br></br>

                         <label>Exotic</label>
                        <div className="select">
                          <select className="form-control" readOnly onChange={this.handleChange} name="Exotic" value={this.state.Exotic} placeholder="Exotic">
                            <option value="" disabled defaultValue>Languages</option>
                            <option value="Aarakocra">Aarakocra</option>
                            <option value="Abyssal">Abyssal</option>
                            <option value="Auran">Auran</option>
                            <option value="Celestial">Celestial</option>
                            <option value="Deep-Speech">Deep Speech</option>
                            <option value="Draconic">Draconic</option>
                            <option value="Infernal">Infernal</option>
                            <option value="Primordial">Primordial</option>
                            <option value="Sylvan">Sylvan</option>
                            <option value="Undercommon">Undercommon</option>
                          </select>
                        </div>

                      </div>         
                  </div>
                </div>

                 <div className="panel panel-default">
                  <div className="panel-heading">
                      <label className="panel-title">Tools Proficiencies</label>
                  </div>
                  <div className="panel-body">
                      <div className="fg-line">
                      <label>Artisan's Tools</label>
                        <div className="select">
                          <select className="form-control" readOnly onChange={this.handleChange} name="Tools" value={this.state.Tools} placeholder="Tools">
                            <option value="" disabled defaultValue>Artisan's tools</option>
                            <option value="Alchemist-supplies">Alchemist's supplies</option>
                            <option value="Brewer-supplies">Brewer's supplies</option>
                            <option value="Calligrapher-supplies">Calligrapher's supplies</option>
                            <option value="Carpenter-tools">Carpenter's tools</option>
                            <option value="Cartographer-tools">Cartographer's tools</option>
                            <option value="Cobbler-tools">Cobbler's tools</option>
                            <option value="Cook-utensils">Cook's utensils</option>
                            <option value="Glassblower-tools">Glassblower's tools</option>
                            <option value="Jeweler-tools">Jeweler's tools</option>
                            <option value="Leatherworker-tools">Leatherworker's tools</option>
                            <option value="Mason-tools">Mason's tools</option>
                            <option value="Painter-tools">Painter's tools</option>
                            <option value="Potter-tools">Potter's tools</option>
                            <option value="Smith-tools">Smith's tools</option>
                            <option value="Thinker-tools">Thinker's tools</option>
                            <option value="Waever-tools">Waever's tools</option>
                            <option value="Woodcarver-tools">Woodcarver's tools</option>
                          </select>
                        </div>

                        <br></br>

                         <label>Gaming Set</label>
                        <div className="select">
                          <select className="form-control" readOnly onChange={this.handleChange} name="Gaming" value={this.state.Gaming} placeholder="Gaming">
                            <option value="" disabled defaultValue>Gaming Set</option>
                            <option value="Dice-set">Dice set</option>
                            <option value="Dragonchess-set">Dragonchess set</option>
                            <option value="Playing-card-set">Playing card set</option>
                            <option value="Three-Dragon">Three-Dragon Ante set</option>
                          </select>
                        </div>

                        <br></br>

                         <label>Musical Instrument</label>
                        <div className="select">
                          <select className="form-control" readOnly onChange={this.handleChange} name="Instrument" value={this.state.Instrument} placeholder="Instrument">
                            <option value="" disabled defaultValue>Musical Instrument</option>
                            <option value="Bagpipes">Bagpipes</option>
                            <option value="Drum">Drum</option>
                            <option value="Dulcimer">Dulcimer</option>
                            <option value="Flute">Flute</option>
                            <option value="Lute">Lute</option>
                            <option value="Lyre">Lyre</option>
                            <option value="Horn">Horn</option>
                            <option value="Pan-flute">Pan flute</option>
                            <option value="Shawm">Shawm</option>
                            <option value="Viol">Viol</option>
                          </select>
                        </div>

                        <br></br>

                         <label>Vehicles</label>
                        <div className="select">
                          <select className="form-control" onChange={this.handleChange} name="Vehicles" value={this.state.Vehicles} placeholder="Vehicles">
                            <option value="" disabled defaultValue>Vehicles</option>
                            <option value="Land">Land</option>
                            <option value="Water">Water</option>
                          </select>
                        </div>

                        <br></br>

                         <label>Other</label>
                        <div className="select">
                          <select className="form-control" onChange={this.handleChange} name="Other" value={this.state.Other} placeholder="Other">
                            <option value="" disabled defaultValue>Other</option>
                            <option value="Disguise-kit">Disguise kit</option>
                            <option value="Forgery-kit">Forgery kit</option>
                            <option value="Herbalism-kit">Herbalism kit</option>
                            <option value="Navigator-tools">Navigator's tools</option>
                            <option value="Poisoner-kit">Poisoner's kit</option>
                            <option value="Thieves-tools">Thieves' tools</option>
                          </select>
                        </div>

                      </div>         
                  </div>
                </div>


          </div>
        </div>
      </div>

    );
  }
}

export default Home