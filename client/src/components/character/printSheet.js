import React, {Component} from "react";
import ReactToPrint from "react-to-print";
import './printSheet.css';

import dragonSheet from "./dragonSheet-1.jpg";
{/* <img id="dragonSheetImage" src={require('./dragonSheet-1.jpg')} /> */}
class ComponentToPrint extends Component {
   
        state={
            abilities:"strength"
        }
    
componentWillReceiveProps(nextProps){
    this.setState({
        ...nextProps
    })
}
componentDidMount(){
    console.log("hi")
    console.log(this.props)
}

  render() {
    return (
      <div className="container-print">
      <img id="dragonSheetImage" src={dragonSheet} style={{ width: '1300px' }} />
      {/* <p>{this.props.Name}</p> */}
      {/* <div className="class-level-print">{this.state.abilities.strength}</div> */}
      <div className="class-level-print">level</div>
      <div className="background-print">background</div>
      <div className="player-name-print">player name</div>
      <div className="faction-print">faction</div>
      <div className="race-print">race</div>
      <div className="alignment-print">alignment</div>
      <div className="experience-points-print"> ____ + _____</div>
      <div className="dci-number-print">"____"</div>
      <div className="character-name-print">character name</div>
        {/* left column */}
      {/* <div className="strength-1-print">{ this.state.abilities.strength }</div> */}
      <div className="strength-1-print">12</div>
      <div className="dexterity-1-print">13</div>
      <div className="constitution-1-print">14</div>
      <div className="intelligence-1-print">15</div>
      <div className="wisdom-1-print">16</div>
      <div className="charisma-1-print">17</div>
      <div className="passive-wisdom-print">7</div>
      {/* second column of the form */}
      <div className="inspiration-print">8</div>
      <div className="proficiency-bonus-print">5</div>
      <div className="strength-2-print">√</div>
      <div className="dexterity-2-print">√</div>
      <div className="constitution-2-print">√</div>
      <div className="intelligence-2-print">√</div>
      <div className="wisdom-2-print">√</div>
      <div className="charisma-2-print">√</div>
      <div className="acrobatics-print">√</div>
      <div className="animal-handling-print">√</div>
      <div className="arcana-print">√</div>
      <div className="athletics-print">√</div>
      <div className="deception-print">√</div>
      <div className="history-print">√</div>
      <div className="insight-print">√</div>
      <div className="intimidation-print">√</div>
      <div className="investigation-print">√</div>
      <div className="medicine-print">√</div>
      <div className="nature-print">√</div>
      <div className="perception-print">√</div>
      <div className="performance-print">√</div>
      <div className="persuasion-print">√</div>
      <div className="religion-print">√</div>
      <div className="sleight-of-hand-print">√</div>
      <div className="stealth-print">√</div>
      <div className="survival-print">√</div>
      {/* third column of the form */}
      <div className="crazy-stuff-print">
        <span className="armor-class-print">8</span>
        <span className="initiative-print">12</span>
        <span className="speed-print">13</span>
      </div>
      <div className="hit-point-max-print">000</div>
      <div className="current-hit-point-print">_____</div>
      <div className="temporary-hit-point-print">_____</div>
      {/* <div className="total-print">_____</div>
      <div className="hit-dice-print">_____</div>
      <div className="success-1-print">_</div>
      <div className="success-2-print">_</div>
      <div className="success-3-print">_</div>
      <div className="failures-1-print">_</div>
      <div className="failures-2-print">_</div>
      <div className="failures-3-print">_</div> */}
      <div className="attack-name-print">
        <div className="name-1-print">name 1</div>
        <div className="name-2-print">name 2</div>
        <div className="name-3-print">name 3</div>
      </div>
      <div className="attack-bonus-print">
        <div className="atk-bonus-1-print">atk1</div>
        <div className="atk-bonus-2-print">atk2</div>
        <div className="atk-bonus-3-print">atk3</div>
      </div>
      <div className="damage-print">
        <div className="damage-type-1-print">damage 1</div>
        <div className="damage-type-2-print">damage 2</div>
        <div className="damage-type-3-print">damage 3</div>
      </div>
      <div className="proficiencies-print">
        <div className="proficiency-1-print">??</div>
        <div className="proficiency-2-print">??</div>
        <div className="proficiency-3-print">??</div>
        <div className="proficiency-4-print">??</div>
        <div className="proficiency-5-print">??</div>
        <div className="proficiency-6-print">??</div>
        <div className="proficiency-7-print">??</div>
      </div>
      <div className="equiments-print">
        <div className="equipment-1-print">??</div>
        <div className="equipment-2-print">??</div>
        <div className="equipment-3-print">??</div>
        <div className="equipment-4-print">??</div>
        <div className="equipment-5-print">??</div>
        <div className="equipment-6-print">??</div>
        <div className="equipment-7-print">??</div>
      </div>
    </div>
    );
  }
}
class printSheet extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}
export default printSheet;







// class ComponentToPrint extends React.Component {
//     constructor(props){
//         super(props)
//         this.state={
//             abilities:"strength"
//         }
//     }
// componentWillReceiveProps(nextProps){
//     this.setState({
//         ...nextProps
//     })
// }


//   render() {
//     return (
//         <div id="thing">
            
//             <p>{this.props.Name}</p>
//             <div className="class-level-print">{this.state.abilities.strength}</div>
//             <div className="background-print">background</div>
//             <div className="player-name-print">player name</div>
//             <div className="faction-print">faction</div>
//             <div className="race-print">race</div>
//             <div className="alignment-print">alignment</div>
//             <div className="experience-points-print"> ____ + _____</div>
//             <div className="dci-number-print">"____"</div>
//             <div className="character-name-print">character name</div>
      
//         </div>
//     );
//   }
// }

// class printSheet extends React.Component {
//   render() {
//     return (
//       <div>
          
//         <ComponentToPrint ref={el => (this.componentRef = el)} />
//       </div>
//     );
//   }
// }

// export default printSheet;
