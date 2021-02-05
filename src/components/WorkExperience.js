import './WorkExperience.css';
import React from 'react';
import uniqid from "uniqid";
// add in delete button 
// in non-edit mode it should say from: to: before the dates

export default class WorkExperience extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      experiences: [],
    }
  }

  handleChange = (e) => {
    const attribute = e.target.name.slice(0, (e.target.name.length - 1));
    const index = e.target.name.charAt(e.target.name.length - 1);
    const tempExperiencesArray = this.state.experiences;
    const experience = tempExperiencesArray[index];
    experience[attribute] = e.target.value;
    this.setState({
      experiences: tempExperiencesArray
    });
  }

  toggleEditing = () => {
    this.setState({editing: !this.state.editing});
  }

  addExperience = () => {
    this.setState({experiences: [...this.state.experiences, 
      {company: "Anchorwork", position: "Research Analyst", description: "I helped do stuff", startDate: "", 
      endDate: "", id: uniqid()}]});
  }

  deleteExperience = (e) => {
    this.setState({experiences: this.state.experiences.filter((experiences) => experiences.id === e.target.id ? false : true)});
  }

  render(){
    const {editing, experiences} = this.state;

    if (editing) {
      return (
        <div className="work">
          <label className="title">
            Work Experience:
          </label>
          {experiences.map((experience, index) => 
              {
                return <div key={experience.id} className="job-editing">
                <label className="company" >Company:
                <input name={`company${index}`} value={experience.company} onChange={this.handleChange}></input>
                </label>
                <label className="position">
                  Position:
                  <input name={`position${index}`} value={experience.position} onChange={this.handleChange}></input>
                </label>
                <label className="description">
                  Description:
                  <textarea name={`description${index}`} value={experience.description} onChange={this.handleChange}></textarea>
                </label>
                <label className="start">
                  Start Date: 
                  <input name={`startDate${index}`} type="date" value={experience.startDate} onChange={this.handleChange}></input>
                </label>
                <label className="end">
                  End Date:
                  <input name={`endDate${index}`} type="date" value={experience.endDate} onChange={this.handleChange}></input>
                </label>
                <button id={experience.id} onClick={this.deleteExperience}>delete</button>
              </div>}
                )}
          <button onClick={this.addExperience}>Add Work Experience</button>
          <button onClick={this.toggleEditing} type="button">Submit</button>
        </div>
      );
    }
    let title;
    if (experiences.length > 0) {
      title = <div className="title">Work Experience</div>;
    }
    return (
      <div className="work">
      {title}
      {experiences.map((experience) => 
        <div className="job" key={experience.id}>
          <div className="company"> {experience.company} </div>
          <div className="details">
            <div className="position"> {experience.position} </div>
            <div className="description"> {experience.description} </div>
            <div className="dates"> 
              <div className="start">From: {experience.startDate} </div>
              <div className="end">Until: {experience.endDate} </div>
            </div>
            </div>
        </div>
          )}
       <button type="button" onClick={this.toggleEditing}>Edit</button>
      </div>
    );
  }
}