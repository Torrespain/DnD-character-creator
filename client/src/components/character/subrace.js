import React from 'react';

class SubRace extends React.Component {
 render() {
   return (
       <div>
        {this.props.class === "Halfling" ? (
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> Lightfoot Halfling</li>
            </ul>
        ):""}
        {this.props.class === "Half-Elf" ? (
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> No SubRace Please Speak With your GM</li>
            </ul>
        ):""}
        {this.props.class === "Gnome" ? (
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> <input type="checkbox" onChange={this.onChange} aria-label="Checkbox for following text input"></input> Forest Gnome</li>
                <li className="list-group-item"> <input type="checkbox" onChange={this.onChange} aria-label="Checkbox for following text input"></input> Rock Gnome</li>
            </ul>
        ):""}
        {this.props.class === "Elf" ? (
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> High Elf</li>
            </ul>
        ):""}
        {this.props.class === "Human" ? (
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> No SubRace Please Speak With your GM</li>
            </ul>
        ):""}
        {this.props.class === "Dwarf" ? (
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> <input type="checkbox" onChange={this.onChange} aria-label="Checkbox for following text input"></input> Hill Dwarf </li>
                <li className="list-group-item"> <input type="checkbox" onChange={this.onChange} aria-label="Checkbox for following text input"></input> Mountain Dwarf </li>
            </ul>
        ):""}
        {this.props.class === "Half-Orc" ? (
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> No SubRace Please Speak With your GM</li>
            </ul>
        ):""}
        {this.props.class === "Dragonborn" ? (
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> No SubRace Please Speak With your GM</li>
            </ul>
        ):""}
        {this.props.class === "Tiefling" ? (
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> No SubRace Please Speak With your GM</li>
            </ul>
        ):""}
       </div>
   );
 }
}

export default SubRace;