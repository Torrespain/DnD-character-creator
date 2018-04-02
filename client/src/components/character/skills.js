import React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        disabled: false
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(e){
    //   console.log(this.props.Skills)
      console.log(e.target.value)
      let skills = this.props.Skills
    // console.log("we hit the change", e.target.checked)
    if(e.target.checked){
        if(skills.length <= 1){
            skills.push(e.target.value)
            this.props.updateSkills(skills)
            console.log("we checked it")
            this.setState({disabled:false})
        } else{
            this.setState({disabled:true})
        }
    } else{
        console.log("we unchecked")
        skills = skills.filter(singleDude => singleDude !== e.target.value);
        this.props.updateSkills(skills)
    }
  }

  render() {
        console.log("this is our current state", this.state)

    return (
      <div> 
        {this.props.class.length > 0 ? "":(<h3> Pick A Class </h3>)}
        {this.props.class === "Barbarian" ? (
            <ul className="list-group list-group-flush" multiple>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Animal Handling"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Animal Handling</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Athletics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Athletics</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Intimidation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Intimidation</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Nature"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Nature</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Perception"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Perception</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Survival"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Survival</li>
            </ul>
        ):""}
        {this.props.class === "Cleric" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"History"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> History</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Medicine"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Medicine</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Persuasion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Persuasion</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
            </ul>
        ):""}
        {this.props.class === "Bard" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Arcobatics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Arcobatics</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Animal Handling"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Animal Handling</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Arcana"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Arcana</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Athletics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Athletics</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Deception"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Deception</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"History"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> History</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Intimidation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Intimidation</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Investigation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Investigation</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Medicine"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Medicine</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Nature"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Nature</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Perception"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Perception</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Performance"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Performance</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Persuasion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Persuasion</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Sleight of Hand"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Sleight of Hand</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Stealth"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Stealth</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Survival"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Survival</li>
            </ul>
        ):""}
        {this.props.class === "Druid" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Animal Handling"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Animal Handling</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Arcana"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Arcana</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Medicine"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Medicine</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Nature"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Nature</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Perception"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Perception</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Survival"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Survival</li>
            </ul>
        ):""}
        {this.props.class === "Fighter" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Arcobatics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Arcobatics</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Animal Handling"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Animal Handling</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Athletics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Athletics</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"History"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> History</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Intimidation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Intimidation</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Perception"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Perception</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Survival"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Survival</li>
            </ul>
        ):""}
        {this.props.class === "Monk" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Arcobatics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Arcobatics</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Athletics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Athletics</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"History"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> History</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Stealth"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Stealth</li>
            </ul>
        ):""}

        
        {this.props.class === "Paladin" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Athletics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Athletics</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Intimidation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Intimidation</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Medicine"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Medicine</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
            </ul>
        ):""}
        {this.props.class === "Ranger" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Animal Handling"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Animal Handling</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Athletics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Athletics</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Investigation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Investigation</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Nature"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Nature</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Perception"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Perception</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Stealth"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Stealth</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Survival"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Survival</li>
            </ul>
        ):""}
        {this.props.class === "Sorcerer" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Arcana"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Arcana</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Deception"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Deception</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Intimidation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Intimidation</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Persuasion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Persuasion</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
            </ul>
        ):""}
        {this.props.class === "Warlock" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Arcana"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Arcana</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Deception"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Deception</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"History"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> History</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Intimidation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Intimidation</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Investigation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Investigation</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Nature"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Nature</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
            </ul>
        ):""}  
        {this.props.class === "Wizard" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Arcana"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Arcana</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"History"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> History</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Investigation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Investigation</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Medicine"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Medicine</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
            </ul>
        ):""}
        {this.props.class === "Rogue" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Arcobatics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Arcobatics</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Athletics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Athletics</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Deception"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Deception</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Intimidation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Intimidation</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Investigation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Investigation</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Perception"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Perception</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Performance"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Performance</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Persuasion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Persuasion</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Sleight of Hand"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Sleight of Hand</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Stealth"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Stealth</li>
            </ul>
        ):""}
         { /* {if(props.class === "barbarian"){
          return (
              <h1>We are barbarian</h1>
          )
      }} */
      
      }
      
      </div>
    );
  }
}

export default Skills