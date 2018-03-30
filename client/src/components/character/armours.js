import React from 'react';

class Armours extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
        {this.props.class === "Barbarian" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> Light Armour</li>
              <li className="list-group-item"> Medium Armour</li>
              <li className="list-group-item"> Sheilds</li>
            </ul>
        ):""} 
        {this.props.class === "Cleric" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> Light Armour</li>
              <li className="list-group-item"> Medium Armour</li>
              <li className="list-group-item"> Sheilds</li>
            </ul>
        ):""} 
        {this.props.class === "Bard" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> Light Armour</li>
            </ul>
        ):""} 
        {this.props.class === "Fighter" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> All Armours</li>
              <li className="list-group-item"> Sheilds</li>
            </ul>
        ):""} 
        {this.props.class === "Druid" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> Light Armour</li>
              <li className="list-group-item"> Medium Armour</li>
              <li className="list-group-item"> Sheilds</li>
            </ul>
        ):""} 
        {this.props.class === "Monk" ? (
            <ul className="list-group list-group-flush">
              <h1> No Proficiencies in Armor </h1>
            </ul>
        ):""} 
        {this.props.class === "Druid" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> All Armour</li>
              <li className="list-group-item"> Sheilds</li>
            </ul>
        ):""}
        {this.props.class === "Paladin" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> All Armour</li>
              <li className="list-group-item"> Sheilds</li>
            </ul>
        ):""}
        {this.props.class === "Ranger" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> Light Armour</li>
              <li className="list-group-item"> Medium Armour</li>
              <li className="list-group-item"> Sheilds</li>
            </ul>
        ):""}
        {this.props.class === "Sorcerer" ? (
            <ul className="list-group list-group-flush">
              <h1> No Proficiencies in Armour </h1>
            </ul>
        ):""}
        {this.props.class === "Warlock" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> Light Armour</li>
            </ul>
        ):""}
        {this.props.class === "Wizard" ? (
            <ul className="list-group list-group-flush">
              <h1> No Proficiencies in Armour </h1>
            </ul>
        ):""}
        {this.props.class === "Rogue" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> Light Armour</li>
            </ul>
        ):""}
        </div>
    );
  }
}

export default Armours;
