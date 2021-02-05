import './Skills.css';
import React from 'react';
import uniqid from "uniqid";
import Rating from '@material-ui/lab/Rating';

export default class Skills extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      skills: [{skill: "Programming", rating: 4, id: uniqid()}, {skill: "Reading", rating: 4, id: uniqid()}, {skill: "Singing", rating: 1, id: uniqid()}],
    }
  }
  handleRating = (e, rating) => {
    const name = e.target.name;
    const tempArray = this.state.skills;
      tempArray[name].rating = rating;
      this.setState({
        skills: tempArray
      });
  }

  handleChange = (e) => {
    const name = e.target.name;
    if (name.includes('skills')){
      const tempArray = this.state.skills;
      tempArray[name[name.length - 1]].skill = e.target.value;
      this.setState({
        skills: tempArray
      });
    } 
  }

  toggleEditing = () => {
    this.setState({editing: !this.state.editing});
  }

  addSkill = () => {
    this.setState({skills: [...this.state.skills, {skill: "", rating: 2.5, id: uniqid()}]});
  }

  deleteSkill = (e) => {
    this.setState({skills: this.state.skills.filter((skill) => skill.id === e.target.id ? false : true)});
  }

  render(){
    const {editing, skills} = this.state;
    let skillsLabel = null;
    if (skills.length > 0){
      skillsLabel =  <p className="title">Skills</p> 
    }
    if (editing) {
      return (
        <div className="skills">
          <p className="title">
            Skills
          </p>      
           {skills.map((skill, index) => {
              return <div key={skill.id}>
                <label className="header">Skill: 
                  <input name={`skills${index}`} onChange={this.handleChange} value={skill.skill}></input>
                  <div className="bottom">
                    <Rating name={`${index}`} onChange={(event, value) => this.handleRating(event, value)} value={skill.rating} precision={0.5} /> 
                    <button onClick={this.deleteSkill} id={skill.id} type="button">delete</button>
                  </div>
                </label>
              </div>
           })}
           <div className="button-div"> 
            <button type="button" onClick={this.addSkill}>Add skill</button>
            <button onClick={this.toggleEditing} type="button">submit</button>
           </div>
        </div>
      );
    }
    return (
      <div className="skills">
       {skillsLabel}
        {skills.map((skill) => {
          return <div key={skill.id} className="no-edit-div">
            <div>{skill.skill}</div>
            <Rating readOnly={true} precision={0.5} value={skill.rating}/> 
            </div>
        })}
        <button type="button" onClick={this.toggleEditing}>Edit</button>
      </div>
    );
  }
}