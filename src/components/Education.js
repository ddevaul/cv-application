import './styles/Education.css';
import React from 'react';
import uniqid from "uniqid";

export default class Education extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      college: "Princeton University",
      gradYear: "2024",
      major: "Classics",
      minors: [{minorName: "Computer Science", id: uniqid()}, {minorName: "Chinese", id: uniqid()}], 
      gpa: "11",
    }
  }

  handleChange = (e) => {
    const name = e.target.name;
    if (name.includes('minors')) {
      const tempArray = this.state.minors;
      // get the final character, which is the index
      tempArray[name[name.length - 1]].minorName = e.target.value;
      this.setState({
        minors: tempArray
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  }

  toggleEditing = () => {
    this.setState({editing: !this.state.editing});
  }

  addMinor = () => {
    this.setState({minors: [...this.state.minors, {minorName: "New Minor", id: uniqid()}]});
  }

  deleteMinor = (e) => {
    this.setState({minors: this.state.minors.filter((minor) => minor.id === e.target.id ? false : true)});
  }

  render(){
    const {editing, college, gradYear, major, minors, gpa} = this.state;
    let minorsLabel = null;
    if(minors.length > 0){
      minorsLabel = minors.map((minor, index) => 
        {
          return <div> <label key={minor.id}> Minor:
          <input name={`minors${index}`} value={minor.minorName} onChange={this.handleChange}></input>
          </label>
            <div className="delete-div">
              <button className="delete" id={minor.id} onClick={this.deleteMinor}>delete</button>
            </div>
          </div>}
          )
    }
    if (editing) {
      return (
        <div className="education">
          <div className="education-editing">
            <p className="title">
              Education
            </p>
            <label>
              College: 
              <input name="college" onChange={this.handleChange} value={college}></input>
            </label>
            <label>
              Graduation Year:
              <input name="gradYear"  onChange={this.handleChange} value={gradYear}></input>
            </label>
            <label>
              Major: 
            <input name="major"  onChange={this.handleChange} value={major}></input>
            </label>
            {minorsLabel}
            <div className="add-button">
              <button onClick={this.addMinor}>Add a Minor</button>
            </div>
            <label>GPA:
            <input name="gpa"  onChange={this.handleChange} value={gpa}></input>
            </label>
          </div>
          <div className="centered-button">
              <button onClick={this.toggleEditing} type="button">submit</button>
            </div>
        </div>
      );
    }
    return (
      <div className="education">
        <p className="title">Education</p>
        <div className="education-content">
          <div className="college">{college}, {gradYear}</div>
          <div className="studying">
            <div className="major">{major}</div>
            <div className="minors">
            {minors.map((minor) => <div className="minor" key={minor.id}>{minor.minorName}</div>
              )}
            </div>
          </div>
          <div className="gpa">GPA: {gpa}</div>
        </div>
        <div className="centered-button">
          <button type="button" onClick={this.toggleEditing}>Edit</button>
        </div>
      </div>
    );
  }
}