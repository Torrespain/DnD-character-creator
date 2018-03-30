import React from 'react';
import './Character.css';
import Skills from './skills';
import API from '../../api/API';
import Armours from './armours'
import SavingThrows from './throwing'
import SubRace from './subrace'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      background: "",
      abilities: {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0},
      diceAbilities: {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0},
      raceAbilities: {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0},
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
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // console.log(event.target.value);
  }

   getData = (position) => {
      API.getRaceAPI(window.event.target.value)
        .then(data => {

          let array= (data.data[position].ability_bonuses);
          
          let raceAbilities= {strength: array[0], dexterity: array[1], constitution: array[2], intelligence: array[3], wisdom: array[4], charisma: array[5]};
          console.log(data.data[position].name);
          console.log(raceAbilities);
          
          this.setState({raceAbilities:raceAbilities, abilities:{
            strength: raceAbilities.strength,
            dexterity: raceAbilities.dexterity,
            constitution: raceAbilities.constitution,
            intelligence: raceAbilities.intelligence,
            wisdom: raceAbilities.wisdom,
            charisma: raceAbilities.charisma
          }});

        })
    }

  grabRace = event =>{
    let race=event.target.value;
    console.log("hi!", race);

    switch(race)
    {
      case "Dwarf":
        this.getData(0);
        break;

      case "Tiefling":
        this.getData(1);
        break;
      
      case "Elf":
        this.getData(2);
        break;

      case "Halfling":
        this.getData(3);
        break;

      case "Human":
        this.getData(4);
        break;

      case "Dragonborn":
        this.getData(5);
        break;

      case "Gnome":
        this.getData(6);
        break;

      case "Half-Elf":
        this.getData(7);
        break;

      case "Half-Orc":
        this.getData(8);
        break;
        // default:
        //     ...
        //     break;
    }

  }

 diceRoll = () => {
  let { raceAbilities, diceAbilities } = this.state
     
    for (let key in diceAbilities) {
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
        diceAbilities[key]=total;

    }
    console.log(raceAbilities);
    this.setState({diceAbilities:diceAbilities, abilities:{
      strength: diceAbilities.strength + raceAbilities.strength,
      dexterity: diceAbilities.dexterity + raceAbilities.dexterity,
      constitution: diceAbilities.constitution + raceAbilities.constitution,
      intelligence: diceAbilities.intelligence + raceAbilities.intelligence,
      wisdom: diceAbilities.wisdom + raceAbilities.wisdom,
      charisma: diceAbilities.charisma + raceAbilities.charisma
    }});

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
                    <label className="panel-title">Name</label>
                  </div>
                  <div className="panel-body">

                    <input onChange={this.handleChange} type="text" className="form-control" name="Name" value={this.state.Name} placeholder="Name" />

                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">ImgURL</label>
                  </div>
                  <div className="panel-body">
                    <input type="text" className="form-control" onChange={this.handleChange} name="Image" value={this.state.Image} placeholder="imageurl" />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">Player</label>
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
                    <label className="panel-title">Sex</label>
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
                    <label className="panel-title">Age</label>
                  </div>
                  <div className="panel-body">
                    <input type="text" className="form-control" onChange={this.handleChange} name="Age" value={this.state.Age} placeholder="Age" />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">Height</label>
                  </div>
                  <div className="panel-body">
                    <input type="text" className="form-control" onChange={this.handleChange} name="Height" value={this.state.Height} placeholder="Height" />
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">Weight</label>
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
                    <label className="panel-title">Race</label>
                  </div>
                  <div className="panel-body">
                    <div className="section-content">
                      <div className="fg-line">
                        <div className="select">
                          <select className="form-control" readOnly onChange={/*this.handleChange,*/ this.grabRace} name="Race" value={this.state.Race} placeholder="Race" >
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
                    <label className="panel-title">Sub Race</label>
                  </div>
                  <div className="panel-body">
                    <div className="panel-body">
                      <SubRace class={this.state.Race} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">Alignment</label>
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
                    <label className="panel-title">Exp/Level</label>
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
                    <label className="panel-title">Class</label>
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
                    <label className="panel-title">Archtype</label>
                  </div>
                  <div className="panel-body">

                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">Level</label>
                  </div>
                  <div className="panel-body">

                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">Background</label>
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
              <button type="button" id="abilitiesDice" className="btn btn-default" onClick={this.diceRoll}>ROLL THE DICE!</button>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Strength: {this.state.abilities.strength}</li>
              <li className="list-group-item">Dexterity: {this.state.abilities.dexterity}</li>
              <li className="list-group-item">Constitution: {this.state.abilities.constitution}</li>
              <li className="list-group-item">Intelligence: {this.state.abilities.intelligence}</li>
              <li className="list-group-item">Wisdom: {this.state.abilities.wisdom}</li>
              <li className="list-group-item">Charisma: {this.state.abilities.charisma}</li>
            </ul>
          </div>
          <div className = "panel panel-default">
          <div className = "panel-heading">
            <label>Saving Throws</label>
          </div>
          <div className="panel-body">
            <SavingThrows class={this.state.Class} />
          </div>
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
                <Armours class={this.state.Class} />
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

          <div className="panel panel-default">
                 <div className="panel-heading">
                     <label className="panel-title">Traits</label>
                 </div>
                 <div className="panel-body">
                 </div>
               </div>          

      </div>
   
       <div className="col-md-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                      <label className="panel-title">Hit Points</label>
                      <button type="button" id="HitDice" className="btn btn-default">ROLL THE DICE!</button>
                  </div>
                  <div className="panel-body">
                  </div>
                </div>

                <div className="panel panel-default">
                 <div className="panel-heading">
                     <label className="panel-title">Speed</label>
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