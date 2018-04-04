import React from 'react';

class SavingThrows extends React.Component {
 render() {
   return (
       <div>
        {this.props.class === "Barbarian" ? (
            <ul className="list-group list-group-flush" id="barbarianThrowing">
              <li className="list-group-item"> Strength </li>
              <li className="list-group-item"> Constitution</li>
            </ul>
        ):""}
        {this.props.class === "Cleric" ? (
            <ul className="list-group list-group-flush" id="clericThrowing">
              <li className="list-group-item"> Wisdom</li>
              <li className="list-group-item"> Charisma</li>
            </ul>
        ):""}
        {this.props.class === "Bard" ? (
            <ul className="list-group list-group-flush" id="bardThrowing">
              <li className="list-group-item"> Dexterity</li>
              <li className="list-group-item"> Charisma</li>
            </ul>
        ):""}
        {this.props.class === "Fighter" ? (
            <ul className="list-group list-group-flush" id="fighterThrowing">
              <li className="list-group-item"> Strength </li>
              <li className="list-group-item"> Constitution</li>
            </ul>
        ):""}
        {this.props.class === "Druid" ? (
            <ul className="list-group list-group-flush" id="druidThrowing">
              <li className="list-group-item"> Intelligence</li>
              <li className="list-group-item"> Wisdom</li>
            </ul>
        ):""}
        {this.props.class === "Monk" ? (
            <ul className="list-group list-group-flush" id="monkThrowing">
              <li className="list-group-item"> Strength </li>
              <li className="list-group-item"> Dexterity</li>
            </ul>
        ):""}
        {this.props.class === "Paladin" ? (
            <ul className="list-group list-group-flush" id="paladinThrowing">
              <li className="list-group-item"> Wisdom</li>
              <li className="list-group-item"> Charisma</li>
            </ul>
        ):""}
        {this.props.class === "Ranger" ? (
            <ul className="list-group list-group-flush" id="rangerThrowing">
              <li className="list-group-item"> Strength </li>
              <li className="list-group-item"> Dexterity</li>
            </ul>
        ):""}
        {this.props.class === "Sorcerer" ? (
            <ul className="list-group list-group-flush" id="sorcererThrowing">
              <li className="list-group-item"> Constitution</li>
              <li className="list-group-item"> Charisma</li>
            </ul>
        ):""}
        {this.props.class === "Warlock" ? (
            <ul className="list-group list-group-flush" id="warlockThrowing">
              <li className="list-group-item"> Wisdom</li>
              <li className="list-group-item"> Charisma</li>
            </ul>
        ):""}
        {this.props.class === "Wizard" ? (
            <ul className="list-group list-group-flush" id="wizardThrowing">
              <li className="list-group-item"> Intelligence</li>
              <li className="list-group-item"> Wisdom</li>
            </ul>
        ):""}
        {this.props.class === "Rogue" ? (
            <ul className="list-group list-group-flush" id="rogueThrowing">
              <li className="list-group-item"> Dexterity</li>
              <li className="list-group-item"> Intelligence</li>
            </ul>
        ):""}
       </div>
   );
 }
}

export default SavingThrows;