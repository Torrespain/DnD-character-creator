import React from 'react';
class Traits extends React.Component {
    render() {
        return (
            <div>
                {this.props.Race === "Dwarf" ? (
                    <ul className="list-group list-group-flush" multiple id="dwarfTrait" >
                        <li className="list-group-item">Darkvision</li>
                        <li className="list-group-item">Dwarven Resilience</li>
                        <li className="list-group-item">Stonecunning</li>
                    </ul>)
                :""}
                {this.props.Race === "Elf" ? (
                    <ul className="list-group list-group-flush" multiple id="elfTrait">
                        <li className="list-group-item">Darkvision</li>
                        <li className="list-group-item">Fey Ancestry</li>
                        <li className="list-group-item">Trance</li>
                    </ul>)
                :""}
                {this.props.Race === "Halfling" ? (
                    <ul className="list-group list-group-flush" multiple id="halflingTrait">
                        <li className="list-group-item">Brave</li>
                        <li className="list-group-item">Halfling Nimbleness</li>
                        <li className="list-group-item">Lucky</li>
                    </ul>)
                :""}
    
                {this.props.Race === "Human" ? (
                    <ul className="list-group list-group-flush" multiple id="humanTrait">
                        <li className="list-group-item">No traits for Scumbag Humans</li>
                    </ul>)
                :""}
                {this.props.Race === "Dragonborn" ? (
                    <ul className="list-group list-group-flush" multiple id="dragonbornTrait">
                        <li className="list-group-item">Draconic Anscestry</li>
                        <li className="list-group-item">Breath Weapon</li>
                        <li className="list-group-item">Damage Resistance</li>
                    </ul>)
                :""}
                {this.props.Race === "Gnome" ? (
                    <ul className="list-group list-group-flush" multiple id="gnomeTrait">
                        <li className="list-group-item">Darkvision</li>
                        <li className="list-group-item">Gnome Cunning</li>
                
                    </ul>)
                :""}
                {this.props.Race === "Half-Elf" ? (
                    <ul className="list-group list-group-flush" multiple id="halfelfTrait">
                        <li className="list-group-item">Darkvision</li>
                        <li className="list-group-item">Fey Ancestry</li>
                        <li className="list-group-item">Skill Versatility</li>
                    </ul>)
                :""}
                {this.props.Race === "Half-Orc" ? (
                    <ul className="list-group list-group-flush" multiple id="halforcTrait">
                        <li className="list-group-item">Darkvision</li>
                        <li className="list-group-item">Savage Attacks</li>
                        <li className="list-group-item">Restless Endurance</li>
                    </ul>)
                :""}
                {this.props.Race === "Tiefling" ? (
                    <ul className="list-group list-group-flush" multiple id="tieflingTrait">
                        <li className="list-group-item">Darkvision</li>
                        <li className="list-group-item">Hellish Resistance</li>
                        <li className="list-group-item">Infernal Legacy</li>
                    </ul>)
                :""}
            </div>
        );
    }
}
export default Traits;