import React from 'react';

class Skills extends React.Component {
    state = {
      disabled: false,
      currentClass: this.props.class,
      lastClass: this.props.class,
      skills: this.props.skills,
      skillsCounter: 0

  }
  onChange = (e) => {
      let skills = this.props.Skills
      let skillsCounter = [...this.state.skillsCounter];
      skillsCounter = skillsCounter += 1
      this.setState({skillsCounter:skillsCounter});
    // console.log("we hit the change", e.target.checked)
    if(e.target.checked){
        if(skillsCounter <= 2){
            skills.push(e.target.value)
            this.props.updateSkills(skills)
            this.setState({disabled: false, skillsCounter:this.state.skillsCounter})
        } else{
            this.setState({disabled: true})
        }
    } else{
        skills = skills.filter(singleDude => singleDude !== e.target.value);
        this.props.updateSkills(skills)
    }
  }
  resetSkills = () => {
    this.props.resetSkills()
    this.setState({currentClass: "", skillsCounter:0, disabled:false})
  }
  updateLastClass = () => {
    this.setState({lastClass: this.state.currentClass})
    this.resetSkills()
  }
  updateNewClass = (newClass) => {
    this.setState({currentClass: newClass})
  }
  updateCurrentClass= () => {
    this.setState({currentClass: this.props.class});
  }
  render() {
    if(this.state.currentClass !== this.props.class){
      setTimeout(() => {this.updateCurrentClass()}, 0)
    }
    else if(this.state.currentClass === 0){
      setTimeout(() => {this.updateCurrentClass()}, 0)
    }
    return (
      <div>
        <div className="classChoice"> 
        {this.props.class.length > 0 ? "":(<h4> Pick A Class </h4>)}
        </div>
        {this.state.currentClass === "Barbarian" ? (
            <ul className="list-group list-group-flush" multiple>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Animal Handling"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Animal Handling</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Athletics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Athletics</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Intimidation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Intimidation</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Nature"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Nature</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Perception"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Perception</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Survival"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Survival</li>
            </ul>
        ):""}
        {this.state.currentClass === "Cleric" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"History"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> History</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Medicine"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Medicine</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Persuasion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Persuasion</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
            </ul>
        ):""}
        {this.state.currentClass === "Bard" ? (
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
        {this.state.currentClass === "Druid" ? (
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
        {this.state.currentClass === "Fighter" ? (
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
        {this.state.currentClass === "Monk" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Arcobatics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Arcobatics</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Athletics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Athletics</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"History"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> History</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Stealth"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Stealth</li>
            </ul>
        ):""}

        
        {this.state.currentClass === "Paladin" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Athletics"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Athletics</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Intimidation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Intimidation</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Medicine"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Medicine</li>
              <li className="list-group-item"><input type="checkbox" disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
            </ul>
        ):""}
        {this.state.currentClass === "Ranger" ? (
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
        {this.state.currentClass === "Sorcerer" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Arcana"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Arcana</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Deception"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Deception</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Intimidation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Intimidation</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Persuasion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Persuasion</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
            </ul>
        ):""}
        {this.state.currentClass === "Warlock" ? (
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
        {this.state.currentClass === "Wizard" ? (
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Arcana"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Arcana</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"History"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> History</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Insight"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Insight</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Investigation"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Investigation</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Medicine"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Medicine</li>
              <li className="list-group-item"><input type="checkbox"  disabled={this.state.disabled}  value={"Religion"} onChange={this.onChange} aria-label="Checkbox for following text input"></input> Religion</li>
            </ul>
        ):""}
        {this.state.currentClass === "Rogue" ? (
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
        <div className="skillsBtn">
        
        <button type="button" className="btn btn-default diceBtn" onClick={this.resetSkills}>Reset</button>

        </div>
      
      </div>
    );
  }
}

export default Skills