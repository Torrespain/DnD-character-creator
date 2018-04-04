import React from "react";
import ReactToPrint from "react-to-print";
import './printSheet.css';
{/* <img id="dragonSheetImage" src={require('./dragonSheet-1.jpg')} /> */}

class ComponentToPrint extends React.Component {
    constructor(props){
        super(props)
        this.state={
            abilities:"strength"
        }
    }
componentWillReceiveProps(nextProps){
    this.setState({
        ...nextProps
    })
}


  render() {
    return (
        <div>
            
            <p>{this.props.Name}</p>
            <div className="class-level-print">{this.state.abilities.strength}</div>
            <div className="background-print">background</div>
            <div className="player-name-print">player name</div>
            <div className="faction-print">faction</div>
            <div className="race-print">race</div>
            <div className="alignment-print">alignment</div>
            <div className="experience-points-print"> ____ + _____</div>
            <div className="dci-number-print">"____"</div>
            <div className="character-name-print">character name</div>
      
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
