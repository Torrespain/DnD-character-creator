import React from 'react';
import './Character.css';
import Skills from './skills';
import './skills.css'
import API from '../../api/API';
import Armours from './armours';
import SavingThrows from './throwing';
import SubRace from './subrace';
import Weapons from './weapons';
import Levels from './levels';
import Traits from './traits'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Player: "",
      Sex: "",
      Age: "",
      Height: "",
      Weight: "",
      Race: "",
      Alignment: "",
      Class: "",
      abilities: {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0},
      diceAbilities: {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0},
      raceAbilities: {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0},
      modifiers: "",
      Skills: [],
      Armour: [],
      hitDie: null,
      Hitpoints: null,
      Speed: null,
      Level: 1,
      ImprovePoints: 0,
      Languages: "",
      Exotic: "",
      Tools: "",
      Weapons: [],
      Gaming: "",
      Instrument: "",
      Vehicles: "",
      Traits: [],
      Other: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.updateSkills = this.updateSkills.bind(this)
  }

  updateSkills (newSkills) {
    this.setState ({Skills: newSkills})
  }

  updateHP (newHitDie){
    this.setState ({hitDie: newHitDie})
  } 

  handleChange = event => {
    
    // console.log("i was a clicked");
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // console.log(event.target.value);
  }

  getRaceData = (position) => {
     API.getRaceAPI(window.event.target.value)
       .then(data => {

        let speed = (data.data[position].speed);
        this.setState({Speed: speed})

        let array = (data.data[position].ability_bonuses);
        
        
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
      });
   }

   getClassData = (position) => {
    API.getClassAPI(window.event.target.value)
    .then(data => {
      console.log("this is the data", data);
      let hitDie = data.data[position].hit_die;

      this.setState({hitDie:hitDie});

    });
   }

  levelChange = event =>{

    let level=event.target.value;
    console.log("level is: ",level);
    this.setState({Level:level});

    let points=null;
    if (level>=4){
      points=Math.floor(level/4);
      this.setState({ImprovePoints:points});
    }
  }


  increaseAbility = event =>{

    if (this.state.ImprovePoints>0) {
      const ability = event.target.value;
      console.log("improoving ",ability);

      const abilities = Object.assign({}, this.state.abilities);

      switch(ability)
      {
        case "increaseStrength":
          abilities.strength += 1
          this.setState({abilities});
        break;
      
        case "increaseDexterity":
          abilities.dexterity += 1
          this.setState({abilities});
        break;
      
        case "increaseConstitution":
          abilities.constitution += 1
          this.setState({abilities});
        break;
      
        case "increaseIntelligence":
          abilities.intelligence += 1
          this.setState({abilities});
        break;
      
        case "increaseWisdom":
          abilities.wisdom += 1
          this.setState({abilities});
        break;
      
        case "increaseCharisma":
          abilities.charisma += 1
          this.setState({abilities});
        break;
      }

      this.setState({ImprovePoints:this.state.ImprovePoints-1});
      this.setState({
        modifiers:{
          strength: this.getModifiers(abilities.strength),
          dexterity: this.getModifiers(abilities.dexterity),
          constitution: this.getModifiers(abilities.constitution),
          intelligence: this.getModifiers(abilities.intelligence),
          wisdom: this.getModifiers(abilities.wisdom),
          charisma: this.getModifiers(abilities.charisma)
          }
      });
    }
  }

grabClass = event =>{
    let theClass=event.target.value;
    console.log("hi", theClass);
    this.setState({Class: theClass}, function(){
      console.log("state updated", this.state.Class);
    });
    switch(theClass)
    {
      case "Barbarian":
        this.getClassData(0);
        let Armour = [];
        setTimeout(() => {
          const barbarianArmour = document.querySelector('#barbarianArmour');
            barbarianArmour.childNodes.forEach((element, index) => {
              Armour.push(element.innerHTML)
            this.setState({
              ...this.state,
              Armour
            });
          })
        }, 0);
        let Weapons = [];
        setTimeout(() => {
          const barbarianWeapon = document.querySelector('#barbarianWeapon');
            barbarianWeapon.childNodes.forEach((element, index) => {
              Weapons.push(element.innerHTML)
            this.setState({
              ...this.state,
              Weapons
            });
          })
        }, 0);
        let SavingThrows = [];
        setTimeout(() => {
          const barbarianThrowing = document.querySelector('#barbarianThrowing');
            barbarianThrowing.childNodes.forEach((element, index) => {
              SavingThrows.push(element.innerHTML)
            this.setState({
              ...this.state,
              SavingThrows
            });
          })
        }, 0);
        break;

      case "Bard":
        this.getClassData(2);
         Armour = [];
        setTimeout(() => {
          const bardArmour = document.querySelector('#bardArmour');
            bardArmour.childNodes.forEach((element, index) => {
              Armour.push(element.innerHTML)
            this.setState({
              ...this.state,
              Armour
            });
          })
        }, 0);
        Weapons = [];
        setTimeout(() => {
          const bardWeapon = document.querySelector('#bardWeapon');
            bardWeapon.childNodes.forEach((element, index) => {
              Weapons.push(element.innerHTML)
            this.setState({
              ...this.state,
              Weapons
            });
          })
        }, 0);
        SavingThrows = [];
        setTimeout(() => {
          const bardThrowing = document.querySelector('#bardThrowing');
            bardThrowing.childNodes.forEach((element, index) => {
              SavingThrows.push(element.innerHTML)
            this.setState({
              ...this.state,
              SavingThrows
            });
          })
        }, 0);
        break;
      
      case "Cleric":
        this.getClassData(1);
         Armour = [];
        setTimeout(() => {
          const clericArmour = document.querySelector('#clericArmour');
            clericArmour.childNodes.forEach((element, index) => {
              Armour.push(element.innerHTML)
            this.setState({
              ...this.state,
              Armour
            });
          })
        }, 0);
        Weapons = [];
        setTimeout(() => {
          const clericWeapon = document.querySelector('#clericWeapon');
            clericWeapon.childNodes.forEach((element, index) => {
              Weapons.push(element.innerHTML)
            this.setState({
              ...this.state,
              Weapons
            });
          })
        }, 0);
        SavingThrows = [];
        setTimeout(() => {
          const clericThrowing = document.querySelector('#clericThrowing');
            clericThrowing.childNodes.forEach((element, index) => {
              SavingThrows.push(element.innerHTML)
            this.setState({
              ...this.state,
              SavingThrows
            });
          })
        }, 0);
        break;

      case "Druid":
        this.getClassData(6);
         Armour = [];
        setTimeout(() => {
          const druidArmour = document.querySelector('#druidArmour');
            druidArmour.childNodes.forEach((element, index) => {
              Armour.push(element.innerHTML)
            this.setState({
              ...this.state,
              Armour
            });
          })
        }, 0);
        Weapons = [];
        setTimeout(() => {
          const druidWeapon = document.querySelector('#druidWeapon');
            druidWeapon.childNodes.forEach((element, index) => {
              Weapons.push(element.innerHTML)
            this.setState({
              ...this.state,
              Weapons
            });
          })
        }, 0);
        SavingThrows = [];
        setTimeout(() => {
          const druidThrowing = document.querySelector('#druidThrowing');
            druidThrowing.childNodes.forEach((element, index) => {
              SavingThrows.push(element.innerHTML)
            this.setState({
              ...this.state,
              SavingThrows
            });
          })
        }, 0);
        break;

      case "Fighter":
        this.getClassData(9);
         Armour = [];
        setTimeout(() => {
          const fighterArmour = document.querySelector('#fighterArmour');
            fighterArmour.childNodes.forEach((element, index) => {
              Armour.push(element.innerHTML)
            this.setState({
              ...this.state,
              Armour
            });
          })
        }, 0);
        Weapons = [];
        setTimeout(() => {
          const fighterWeapon = document.querySelector('#fighterWeapon');
            fighterWeapon.childNodes.forEach((element, index) => {
              Weapons.push(element.innerHTML)
            this.setState({
              ...this.state,
              Weapons
            });
          })
        }, 0);
        SavingThrows = [];
        setTimeout(() => {
          const fighterThrowing = document.querySelector('#fighterThrowing');
            fighterThrowing.childNodes.forEach((element, index) => {
              SavingThrows.push(element.innerHTML)
            this.setState({
              ...this.state,
              SavingThrows
            });
          })
        }, 0);
        break;

      case "Monk":
        this.getClassData(11);
         Armour = [];
        setTimeout(() => {
          const monkArmour = document.querySelector('#monkArmour');
            monkArmour.childNodes.forEach((element, index) => {
              Armour.push(element.innerHTML)
            this.setState({
              ...this.state,
              Armour
            });
          })
        }, 0);
        Weapons = [];
        setTimeout(() => {
          const monkWeapon = document.querySelector('#monkWeapon');
            monkWeapon.childNodes.forEach((element, index) => {
              Weapons.push(element.innerHTML)
            this.setState({
              ...this.state,
              Weapons
            });
          })
        }, 0);
        SavingThrows = [];
        setTimeout(() => {
          const monkThrowing = document.querySelector('#monkThrowing');
            monkThrowing.childNodes.forEach((element, index) => {
              SavingThrows.push(element.innerHTML)
            this.setState({
              ...this.state,
              SavingThrows
            });
          })
        }, 0);
        break;

      case "Paladin":
        this.getClassData(7);
         Armour = [];
        setTimeout(() => {
          const paladinArmour = document.querySelector('#paladinArmour');
            paladinArmour.childNodes.forEach((element, index) => {
              Armour.push(element.innerHTML)
            this.setState({
              ...this.state,
              Armour
            });
          })
        }, 0);
        Weapons = [];
        setTimeout(() => {
          const paladinWeapon = document.querySelector('#paladinWeapon');
            paladinWeapon.childNodes.forEach((element, index) => {
              Weapons.push(element.innerHTML)
            this.setState({
              ...this.state,
              Weapons
            });
          })
        }, 0);
        SavingThrows = [];
        setTimeout(() => {
          const paladinThrowing = document.querySelector('#paladinThrowing');
            paladinThrowing.childNodes.forEach((element, index) => {
              SavingThrows.push(element.innerHTML)
            this.setState({
              ...this.state,
              SavingThrows
            });
          })
        }, 0);
        break;     

      case "Rogue":
        this.getClassData(10);
         Armour = [];
        setTimeout(() => {
          const rogueArmour = document.querySelector('#rogueArmour');
            rogueArmour.childNodes.forEach((element, index) => {
              Armour.push(element.innerHTML)
            this.setState({
              ...this.state,
              Armour
            });
          })
        }, 0);
        Weapons = [];
        setTimeout(() => {
          const rogueWeapon = document.querySelector('#rogueWeapon');
            rogueWeapon.childNodes.forEach((element, index) => {
              Weapons.push(element.innerHTML)
            this.setState({
              ...this.state,
              Weapons
            });
          })
        }, 0);
        SavingThrows = [];
        setTimeout(() => {
          const rogueThrowing = document.querySelector('#rogueThrowing');
            rogueThrowing.childNodes.forEach((element, index) => {
              SavingThrows.push(element.innerHTML)
            this.setState({
              ...this.state,
              SavingThrows
            });
          })
        }, 0);
        break;

      case "Sorcerer":
        this.getClassData(3);
         Armour = [];
        setTimeout(() => {
          const sorcererArmour = document.querySelector('#sorcererArmour');
            sorcererArmour.childNodes.forEach((element, index) => {
              Armour.push(element.innerHTML)
            this.setState({
              ...this.state,
              Armour
            });
          })
        }, 0);
        Weapons = [];
        setTimeout(() => {
          const sorcererWeapon = document.querySelector('#sorcererWeapon');
            sorcererWeapon.childNodes.forEach((element, index) => {
              Weapons.push(element.innerHTML)
            this.setState({
              ...this.state,
              Weapons
            });
          })
        }, 0);
        SavingThrows = [];
        setTimeout(() => {
          const sorcererThrowing = document.querySelector('#sorcererThrowing');
            sorcererThrowing.childNodes.forEach((element, index) => {
              SavingThrows.push(element.innerHTML)
            this.setState({
              ...this.state,
              SavingThrows
            });
          })
        }, 0);
        break;

      case "Ranger":
        this.getClassData(8);
         Armour = [];
        setTimeout(() => {
          const rangerArmour = document.querySelector('#rangerArmour');
            rangerArmour.childNodes.forEach((element, index) => {
              Armour.push(element.innerHTML)
            this.setState({
              ...this.state,
              Armour
            });
          })
        }, 0);
        Weapons = [];
        setTimeout(() => {
          const rangerWeapon = document.querySelector('#rangerWeapon');
            rangerWeapon.childNodes.forEach((element, index) => {
              Weapons.push(element.innerHTML)
            this.setState({
              ...this.state,
              Weapons
            });
          })
        }, 0);
        SavingThrows = [];
        setTimeout(() => {
          const rangerThrowing = document.querySelector('#rangerThrowing');
            rangerThrowing.childNodes.forEach((element, index) => {
              SavingThrows.push(element.innerHTML)
            this.setState({
              ...this.state,
              SavingThrows
            });
          })
        }, 0);
        break;

      case "Warlock":
        this.getClassData(4);
         Armour = [];
        setTimeout(() => {
          const warlockArmour = document.querySelector('#warlockArmour');
            warlockArmour.childNodes.forEach((element, index) => {
              Armour.push(element.innerHTML)
            this.setState({
              ...this.state,
              Armour
            });
          })
        }, 0);
        Weapons = [];
        setTimeout(() => {
          const warlockWeapon = document.querySelector('#warlockWeapon');
            warlockWeapon.childNodes.forEach((element, index) => {
              Weapons.push(element.innerHTML)
            this.setState({
              ...this.state,
              Weapons
            });
          })
        }, 0);
        SavingThrows = [];
        setTimeout(() => {
          const warlockThrowing = document.querySelector('#warlockThrowing');
            warlockThrowing.childNodes.forEach((element, index) => {
              SavingThrows.push(element.innerHTML)
            this.setState({
              ...this.state,
              SavingThrows
            });
          })
        }, 0);
        break;

      case "Wizard":
        this.getClassData(5);
         Armour = [];
        setTimeout(() => {
          const wizardArmour = document.querySelector('#wizardArmour');
            wizardArmour.childNodes.forEach((element, index) => {
              Armour.push(element.innerHTML)
            this.setState({
              ...this.state,
              Armour
            });
          })
        }, 0);
        Weapons = [];
        setTimeout(() => {
          const wizardWeapon = document.querySelector('#wizardWeapon');
            wizardWeapon.childNodes.forEach((element, index) => {
              Weapons.push(element.innerHTML)
            this.setState({
              ...this.state,
              Weapons
            });
          })
        }, 0);
        SavingThrows = [];
        setTimeout(() => {
          const wizardThrowing = document.querySelector('#wizardThrowing');
            wizardThrowing.childNodes.forEach((element, index) => {
              SavingThrows.push(element.innerHTML)
            this.setState({
              ...this.state,
              SavingThrows
            });
          })
        }, 0);
        break;
        // default:
        //     ...
        //     break;
    }
  }

  grabRace = event =>{
    let race=event.target.value;
    console.log("hi!", race);
    this.setState({Race: race});

    switch(race)
    {
      case "Dwarf":
        this.getRaceData(0);
        let Traits = [];
        setTimeout(() => {
          const dwarfTrait = document.querySelector('#dwarfTrait');
            dwarfTrait.childNodes.forEach((element, index) => {
              Traits.push(element.innerHTML)
            this.setState({
              ...this.state,
              Traits
            });
          })
        }, 0);
        break;
      case "Tiefling":
        this.getRaceData(1);
        Traits = [];
        setTimeout(() => {
          const tieflingTrait = document.querySelector('#tieflingTrait');
            tieflingTrait.childNodes.forEach((element, index) => {
              Traits.push(element.innerHTML)
            this.setState({
              ...this.state,
              Traits
            });
          })
        }, 0);
        break;
      
      case "Elf":
        this.getRaceData(2);
        Traits = [];
        setTimeout(() => {
          const elfTrait = document.querySelector('#elfTrait');
            elfTrait.childNodes.forEach((element, index) => {
              Traits.push(element.innerHTML)
            this.setState({
              ...this.state,
              Traits
            });
          })
        }, 0);
        break;

      case "Halfling":
        this.getRaceData(3);
        Traits = [];
        setTimeout(() => {
          const halflingTrait = document.querySelector('#halflingTrait');
            halflingTrait.childNodes.forEach((element, index) => {
              Traits.push(element.innerHTML)
            this.setState({
              ...this.state,
              Traits
            });
          })
        }, 0);
        break;

      case "Human":
        this.getRaceData(4);
        Traits = [];
        setTimeout(() => {
          const humanTrait = document.querySelector('#humanTrait');
            humanTrait.childNodes.forEach((element, index) => {
              Traits.push(element.innerHTML)
            this.setState({
              ...this.state,
              Traits
            });
          })
        }, 0);
        break;

      case "Dragonborn":
        this.getRaceData(5);
        Traits = [];
        setTimeout(() => {
          const dragonbornTrait = document.querySelector('#dragonbornTrait');
            dragonbornTrait.childNodes.forEach((element, index) => {
              Traits.push(element.innerHTML)
            this.setState({
              ...this.state,
              Traits
            });
          })
        }, 0);
        break;

      case "Gnome":
        this.getRaceData(6);
        Traits = [];
        setTimeout(() => {
          const gnomeTrait = document.querySelector('#gnomeTrait');
            gnomeTrait.childNodes.forEach((element, index) => {
              Traits.push(element.innerHTML)
            this.setState({
              ...this.state,
              Traits
            });
          })
        }, 0);
        break;

      case "Half-Elf":
        this.getRaceData(7);
        Traits = [];
        setTimeout(() => {
          const halfelfTrait = document.querySelector('#halfelfTrait');
            halfelfTrait.childNodes.forEach((element, index) => {
              Traits.push(element.innerHTML)
            this.setState({
              ...this.state,
              Traits
            });
          })
        }, 0);
        break;

      case "Half-Orc":
        this.getRaceData(8);
        Traits = [];
        setTimeout(() => {
          const halforcTrait = document.querySelector('#halforcTrait');
            halforcTrait.childNodes.forEach((element, index) => {
              Traits.push(element.innerHTML)
            this.setState({
              ...this.state,
              Traits
            });
          })
        }, 0);
        break;
        // default:
        //     ...
        //     break;
    }
    const diceAbilities= {strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0}
    this.setState({diceAbilities: diceAbilities});
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
    this.setState({
      diceAbilities:diceAbilities, 
      abilities:{
        strength: diceAbilities.strength + raceAbilities.strength,
        dexterity: diceAbilities.dexterity + raceAbilities.dexterity,
        constitution: diceAbilities.constitution + raceAbilities.constitution,
        intelligence: diceAbilities.intelligence + raceAbilities.intelligence,
        wisdom: diceAbilities.wisdom + raceAbilities.wisdom,
        charisma: diceAbilities.charisma + raceAbilities.charisma
      },
      modifiers:{
        strength: this.getModifiers(diceAbilities.strength + raceAbilities.strength),
        dexterity: this.getModifiers(diceAbilities.dexterity + raceAbilities.dexterity),
        constitution: this.getModifiers(diceAbilities.constitution + raceAbilities.constitution),
        intelligence: this.getModifiers(diceAbilities.intelligence + raceAbilities.intelligence),
        wisdom: this.getModifiers(diceAbilities.wisdom + raceAbilities.wisdom),
        charisma: this.getModifiers(diceAbilities.charisma + raceAbilities.charisma)
      }
    }) 
  }

  getModifiers = event =>{
    if (event===1) {
      return (-5);
    }
    else if (event===2 || event===3) {
      return (-4);
    }
    else if (event===4 || event===5) {
      return (-3);
    }
    else if (event===6 || event===7) {
      return (-2);
    }
    else if (event===8 || event===9) {
      return (-1);
    }
    else if (event===10 || event===11) {
      return (0);
    }
    else if (event===12 || event===13) {
      return (1);
    }
    else if (event===14 || event===15) {
      return (2);
    }
    else if (event===16 || event===17) {
      return (3);
    }
    else if (event===18 || event===19) {
      return (4);
    }
    else if (event===20 || event===21) {
      return (5);
    }
    else if (event===22 || event===33) {
      return (6);
    }
    else if (event===24 || event===25) {
      return (7);
    }
    else if (event===26 || event===27) {
      return (8);
    }
    else if (event===28 || event===29) {
      return (9);
    }
    else if (event===30) {
      return (10);
    }
  }

healthPoints = event => {
  let level = this.state.Level;
  let newThrow = null;
  let conModifier = this.state.modifiers.constitution;
  let constitutionHP = this.state.modifiers.constitution;
  let health = this.state.hitDie;
  let healthRace = null;
  let totalHealth = null;

  if (this.state.Race=="Dwarf") {
    healthRace+=1;
  }

  if (level!==1) {
    for (var i = 2; i <= level; i++) {
      newThrow = Math.floor(Math.random()*this.state.hitDie)+1;
      health = health + newThrow;
      constitutionHP += conModifier;
      if (this.state.Race=="Dwarf") {
        healthRace+=1;
      }
    }
  }
  totalHealth = health + constitutionHP + healthRace;
  this.setState({constitutionHP:constitutionHP});
  this.setState({Hitpoints:health});
  this.setState({HealthRace:healthRace});
  this.setState({TotalHP:totalHealth});
}

  render() {
    console.log(this.state)
    // console.log(this.state.name)
    return (

      <div className="container">

        <div className="row">
          <div className="col-md-2" >
            <img className="dragonSide" src="/../images/knight.jpg"></img>
          </div>

          <div className="col-md-10">

            <div className="row">
              <div className="col-md-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">Character Name</label>
                  </div>
                  <div className="panel-body">

                    <input onChange={this.handleChange} type="text" className="form-control" name="Name" value={this.state.Name} placeholder="Name" />

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

              <div className="col-md-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">Player Name</label>
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

              <div className="col-md-2">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">Age</label>
                  </div>
                  <div className="panel-body">
                    <input type="text" className="form-control" onChange={this.handleChange} name="Age" value={this.state.Age} placeholder="Age" />
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">Height</label>
                  </div>
                  <div className="panel-body">
                    <input type="text" className="form-control" onChange={this.handleChange} name="Height" value={this.state.Height} placeholder="Height" />
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">Weight</label>
                  </div>
                  <div className="panel-body">
                    <input type="text" className="form-control" onChange={this.handleChange} name="Weight" value={this.state.Weight} placeholder="Weight" />
                  </div>
                </div>
              </div>

              <Levels levelChange={(event) => this.levelChange(event)} />

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
                    <div className="panel-body" id="subracePanel">
                      <SubRace class={this.state.Race} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <label className="panel-title">Class</label>
                  </div>
                  <div className="panel-body">
                    <div className="section-content">
                      <div className="fg-line">
                        <div className="select">
                          <select className="form-control" readOnly onChange={this.grabClass} name="Class" value={this.state.Class} placeholder="Class">
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
              
            </div>

          </div>
        </div>
        <div className ="row">
        <div className ="col-md-4">
          <div className="panel panel-default">
            <div className="panel-heading">
              <label>Abilities</label>
              <span> (IP {this.state.ImprovePoints})</span>
              <button type="button" id="abilitiesDice" className="btn btn-default diceBtn" onClick={this.diceRoll}>ROLL THE DICE!</button>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Strength: {this.state.abilities.strength} ({this.state.diceAbilities.strength} + {this.state.raceAbilities.strength}) <button type="button" className="btn btn-default pluses" onClick= {this.increaseAbility} value="increaseStrength">+</button><p>Modifier: {this.state.modifiers.strength}</p></li>
              <li className="list-group-item">Dexterity: {this.state.abilities.dexterity} ({this.state.diceAbilities.dexterity} + {this.state.raceAbilities.dexterity})<button type="button" className="btn btn-default pluses" onClick= {this.increaseAbility} value="increaseDexterity">+</button><p>Modifier: {this.state.modifiers.dexterity}</p></li>
              <li className="list-group-item">Constitution: {this.state.abilities.constitution} ({this.state.diceAbilities.constitution} + {this.state.raceAbilities.constitution})<button type="button" className="btn btn-default pluses" onClick= {this.increaseAbility} value="increaseConstitution">+</button><p>Modifier: {this.state.modifiers.constitution}</p></li>
              <li className="list-group-item">Intelligence: {this.state.abilities.intelligence} ({this.state.diceAbilities.intelligence} + {this.state.raceAbilities.intelligence})<button type="button" className="btn btn-default pluses" onClick= {this.increaseAbility} value="increaseIntelligence">+</button><p>Modifier: {this.state.modifiers.intelligence}</p></li>
              <li className="list-group-item">Wisdom: {this.state.abilities.wisdom} ({this.state.diceAbilities.wisdom} + {this.state.raceAbilities.wisdom})<button type="button" className="btn btn-default pluses" onClick= {this.increaseAbility} value="increaseWisdom">+</button><p>Modifier: {this.state.modifiers.wisdom}</p></li>
              <li className="list-group-item">Charisma: {this.state.abilities.charisma} ({this.state.diceAbilities.charisma} + {this.state.raceAbilities.charisma})<button type="button" className="btn btn-default pluses" onClick= {this.increaseAbility} value="increaseCharisma">+</button><p>Modifier: {this.state.modifiers.charisma}</p></li>
            </ul>
          </div>
          <div className="panel panel-default">
              <div className="panel-heading">
                <label className="panel-title">Weapon Proficiencies</label>
              </div>
              <div className="panel-body">
                <Weapons class={this.state.Class}/>
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
              <Traits Race={this.state.Race}/>
            </div>
          </div>
          <div className = "panel panel-default">
            <div className = "panel-heading">
              <label>Saving Throws</label>
            </div>
            <div className="panel-body">
              <SavingThrows class={this.state.Class} />
            </div>
          </div>          
        </div>
   
        <div className="col-md-4">
          <div className="panel panel-default">
            <div className="panel-heading">
                <label className="panel-title">Hit Points</label>
                <button type="button" id="HitDice" className="btn btn-default" onClick={this.healthPoints} value={this.state.Level}>Calculate</button>
            </div>
            <div className="panel-body">
              <span>Total HP: {this.state.TotalHP} (Health:{this.state.Hitpoints} + Const: {this.state.constitutionHP} + Race: {this.state.HealthRace})</span>
            </div>
          </div>
            <div className="row">

            <div className="col-md-6">
            <div className="panel panel-default">
             <div className="panel-heading">
                 <label className="panel-title">Speed</label>
             </div>
             <div className="panel-body">
                <span>{this.state.Speed}</span>
             </div>
           </div>
           </div>
           <div className="col-md-6">
            <div className="panel panel-default">
             <div className="panel-heading">
                 <label className="panel-title">Armour Class</label>
             </div>
             <div className="panel-body">
                <span>10 + ({this.state.modifiers.dexterity})</span>
             </div>
           </div>
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
                    <select className="form-control" readOnly onChange={this.handleChange} name="Vehicles" value={this.state.Vehicles} placeholder="Vehicles">
                      <option value="" disabled defaultValue>Vehicles</option>
                      <option value="Land">Land</option>
                      <option value="Water">Water</option>
                    </select>
                  </div>

                  <br></br>

                   <label>Other</label>
                  <div className="select">
                    <select className="form-control" readOnly onChange={this.handleChange} name="Other" value={this.state.Other} placeholder="Other">
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