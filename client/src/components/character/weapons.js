import React from 'react';

class Weapons extends React.Component {
 render() {
   return (
       <div>
        {this.props.class === "Barbarian" ? (
                <ul className="list-group list-group-flush" multiple id="barbarianWeapon">
                <li className="list-group-item">Simple Weapons</li>
                <li className="list-group-item">Martial Weapons</li>
                </ul>):""}

                {this.props.class === "Bard" ? (
                <ul className="list-group list-group-flush" multiple id="bardWeapon">
                <li className="list-group-item">Simple Weapons</li>
                <li className="list-group-item">Long Swords</li>
                <li className="list-group-item">Short Swords</li>
                <li className="list-group-item">Rapiers</li>
                <li className="list-group-item">Crossbows, Hand</li>
                </ul>):""}

                {this.props.class === "Cleric" ? (
                <ul className="list-group list-group-flush" multiple id="clericWeapon">
                <li className="list-group-item">Simple Weapons</li>
                </ul>):""}


                {this.props.class === "Druid" ? (
                <ul className="list-group list-group-flush" multiple id="druidWeapon">
                <li className="list-group-item">Clubs</li>
                <li className="list-group-item">Daggers</li>
                <li className="list-group-item">Javelins</li>
                <li className="list-group-item">Maces</li>
                <li className="list-group-item">Quarterstaffs</li>
                <li className="list-group-item">Sickles</li>
                <li className="list-group-item">Spears</li>
                <li className="list-group-item">Darts</li>
                <li className="list-group-item">Slings</li>
                <li className="list-group-item">Scimitars</li>
                <li className="list-group-item">Herbalism Kit</li>
                </ul>):""}


                {this.props.class === "Fighter" ? (
                <ul className="list-group list-group-flush" multiple id="fighterWeapon">
                <li className="list-group-item">Simple Weapons</li>
                <li className="list-group-item">Martial Weapons</li>
                </ul>):""}


                {this.props.class === "Monk" ? (
                <ul className="list-group list-group-flush" multiple id="monkWeapon">
                <li className="list-group-item">Simple Weapons</li>
                <li className="list-group-item">Short Swords</li>
                </ul>):""}


                {this.props.class === "Paladin" ? (
                <ul className="list-group list-group-flush" multiple id="paladinWeapon">
                <li className="list-group-item">Simple Weapons</li>
                <li className="list-group-item">Martial Weapons</li>
                </ul>):""}


                {this.props.class === "Ranger" ? (
                <ul className="list-group list-group-flush" multiple id="rangerWeapon">
                <li className="list-group-item">Simple Weapons</li>
                <li className="list-group-item">Martial Weapons</li>
                </ul>):""}


                {this.props.class === "Rogue" ? (
                <ul className="list-group list-group-flush" multiple id="rogueWeapon">
                <li className="list-group-item">Simple Weapons</li>
                <li className="list-group-item">Rapiers</li>
                <li className="list-group-item">Long Swords</li>
                <li className="list-group-item">Short Swords</li>
                <li className="list-group-item">Crossbows, Hand</li>
                </ul>):""}


                {this.props.class === "Sorcerer" ? (
                <ul className="list-group list-group-flush" multiple id="sorcererWeapon">
                <li className="list-group-item">Daggers</li>
                <li className="list-group-item">Quarterstaffs</li>
                <li className="list-group-item">Darts</li>
                <li className="list-group-item">Slings</li>
                </ul>):""}


                {this.props.class === "Warlock" ? (
                <ul className="list-group list-group-flush" multiple id="warlockWeapon">
                <li className="list-group-item">Simple Weapons</li>
                </ul>):""}

                {this.props.class === "Wizard" ? (
                <ul className="list-group list-group-flush" multiple id="wizardWeapon">
                <li className="list-group-item">Daggers</li>
                <li className="list-group-item">Quarterstaffs</li>
                <li className="list-group-item">Darts</li>
                <li className="list-group-item">Slings</li>
                </ul>):""}








      
        </div>
   );
 }
}

export default Weapons;