import React, {Component} from "react";
import ReactToPrint from "react-to-print";
import './printSheet.css';

import dragonSheet from "./dragonSheet-1.jpg";
/* {<img id="dragonSheetImage" src={require('./dragonSheet-1.jpg')} /> }*/
class ComponentToPrint extends Component {
   constructor(props) {
    super(props);
      this.state={
        abilities:"strength"
      }

    }

  render() {
    console.log("hello", this.props)
    console.log("jose", this.props.name)
    return (
      <div className="container-print">
      <img id="dragonSheetImage" src={dragonSheet} alt="dragon" style={{ width: '1300px' }} />
      {/* <p>{this.props.Name}</p> */}
      {/* <div className="class-level-print">{this.state.abilities.strength}</div> */}
      <div className="class-level-print">{this.props.character.Class} ({this.props.character.Level})</div>
      <div className="background-print"></div>
      <div className="player-name-print">{this.props.character.Player}</div>
      <div className="faction-print"></div>
      <div className="race-print">{this.props.character.Race}</div>
      <div className="alignment-print">{this.props.character.Alignment}</div>
      <div className="experience-points-print"></div>
      <div className="dci-number-print"></div>
      <div className="character-name-print">{this.props.character.Name}</div>
        {/* left column */}
      {/* <div className="strength-1-print">{ this.state.abilities.strength }</div> */}
      <div className="strength-1-print">{this.props.character.abilities.strength}</div>
      <div className="dexterity-1-print">{this.props.character.abilities.dexterity}</div>
      <div className="constitution-1-print">{this.props.character.abilities.constitution}</div>
      <div className="intelligence-1-print">{this.props.character.abilities.intelligence}</div>
      <div className="wisdom-1-print">{this.props.character.abilities.wisdom}</div>
      <div className="charisma-1-print">{this.props.character.abilities.charisma}</div>
      <div className="strength-1b-print">{this.props.character.modifiers.strength}</div>
      <div className="dexterity-1b-print">{this.props.character.modifiers.dexterity}</div>
      <div className="constitution-1b-print">{this.props.character.modifiers.constitution}</div>
      <div className="intelligence-1b-print">{this.props.character.modifiers.intelligence}</div>
      <div className="wisdom-1b-print">{this.props.character.modifiers.wisdom}</div>
      <div className="charisma-1b-print">{this.props.character.modifiers.charisma}</div>
      <div className="passive-wisdom-print"></div>
      {/* second column of the form */}
      <div className="inspiration-print"></div>
      <div className="proficiency-bonus-print"></div>
      <div className="strength-2-print"></div>
      <div className="dexterity-2-print"></div>
      <div className="constitution-2-print"></div>
      <div className="intelligence-2-print"></div>
      <div className="wisdom-2-print"></div>
      <div className="charisma-2-print"></div>
      <div className="acrobatics-print"></div>
      <div className="animal-handling-print"></div>
      <div className="arcana-print"></div>
      <div className="athletics-print"></div>
      <div className="deception-print"></div>
      <div className="history-print"></div>
      <div className="insight-print"></div>
      <div className="intimidation-print"></div>
      <div className="investigation-print"></div>
      <div className="medicine-print"></div>
      <div className="nature-print"></div>
      <div className="perception-print"></div>
      <div className="performance-print"></div>
      <div className="persuasion-print"></div>
      <div className="religion-print"></div>
      <div className="sleight-of-hand-print"></div>
      <div className="stealth-print"></div>
      <div className="survival-print"></div>
      {/* third column of the form */}
      <div className="crazy-stuff-print">
        <span className="armor-class-print">{10+this.props.character.modifiers.dexterity}</span>
        <span className="initiative-print"></span>
        <span className="speed-print">{this.props.character.Speed}</span>
      </div>
      <div className="hit-point-max-print">{this.props.character.TotalHP}</div>
      <div className="current-hit-point-print"></div>
      <div className="temporary-hit-point-print"></div>
      <div className="hit-dice-print">{this.props.character.hitDie}</div>
      {/* <div className="total-print">_____</div>
      <div className="success-1-print">_</div>
      <div className="success-2-print">_</div>
      <div className="success-3-print">_</div>
      <div className="failures-1-print">_</div>
      <div className="failures-2-print">_</div>
      <div className="failures-3-print">_</div> */}
      <div className="attack-name-print">
        <div className="name-1-print"></div>
        <div className="name-2-print"></div>
        <div className="name-3-print"></div>
      </div>
      <div className="attack-bonus-print">
        <div className="atk-bonus-1-print"></div>
        <div className="atk-bonus-2-print"></div>
        <div className="atk-bonus-3-print"></div>
      </div>
      <div className="damage-print">
        <div className="damage-type-1-print"></div>
        <div className="damage-type-2-print"></div>
        <div className="damage-type-3-print"></div>
      </div>
      <div className="proficiencies-print">
        <div className="proficiency-1-print">{this.props.character.Weapons[0]}  {this.props.character.Weapons[5]} {this.props.character.Weapons[10]}</div>
        <div className="proficiency-2-print">{this.props.character.Weapons[1]} {this.props.character.Weapons[6]}</div>
        <div className="proficiency-3-print">{this.props.character.Weapons[2]} {this.props.character.Weapons[7]}</div>
        <div className="proficiency-4-print">{this.props.character.Weapons[3]} {this.props.character.Weapons[8]}</div>
        <div className="proficiency-5-print">{this.props.character.Weapons[4]} {this.props.character.Weapons[9]}</div>
        <div className="proficiency-6-print">{this.props.character.Armour[0]}</div>
        <div className="proficiency-7-print">{this.props.character.Armour[1]}</div>
        <div className="proficiency-8-print">{this.props.character.Armour[2]}</div>
        <div className="proficiency-9-print">{this.props.character.Armour[3]}</div>
        <div className="proficiency-10-print">Lang 1: {this.props.character.Languages}</div>
        <div className="proficiency-11-print">Lang 2: {this.props.character.Exotic}</div>
      </div>
      <div className="equiments-print">
        <div className="equipment-1-print">Artisan tools: {this.props.character.Tools}</div>
        <div className="equipment-2-print">Gaming set: {this.props.character.Gaming}</div>
        <div className="equipment-3-print">Instrument: {this.props.character.Instrument}</div>
        <div className="equipment-4-print">Vehicle: {this.props.character.Vehicles}</div>
        <div className="equipment-5-print">Other: {this.props.character.Other}</div>
        <div className="equipment-6-print"></div>
        <div className="equipment-7-print"></div>
      </div>
        <div className="traits-1-print">{this.props.character.Traits[0]}</div>
        <div className="traits-2-print">{this.props.character.Traits[1]}</div>
        <div className="traits-3-print">{this.props.character.Traits[2]}</div>
    </div>
    );
  }
}


class printSheet extends React.Component {
  render() {

    return (
      <div>
        <ReactToPrint
          trigger={() => <a>Elena, Jose, Ricky, Jack & Javier (UC Berkeley Bootcamp)</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint character={this.props.character} ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}
export default printSheet;