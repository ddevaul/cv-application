import React from 'react';
import uniqid from "uniqid";

export default class Education extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: true,
      college: "Princeton",
      gradYear: "2024",
      major: "Classics",
      minors: [], 
      gpa: "4.20",
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
      minorsLabel = <label>Minors: </label>
    }
    if (editing) {
      return (
        <div>
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
            {minors.map((minor, index) => 
              {return <div key={minor.id}>
                <input name={`minors${index}`} value={minor.minorName} onChange={this.handleChange}></input>
                <button id={minor.id} onClick={this.deleteMinor}>delete</button>
              </div>}
                )}
          <button onClick={this.addMinor}>Add a Minor</button>
          <label>GPA:
           <input name="gpa"  onChange={this.handleChange} value={gpa}></input>
          </label>
          <button onClick={this.toggleEditing} type="button">submit</button>
        </div>
      );
    }
    return (
      <div>
       <div>{college}</div>
       <div>{gradYear}</div>
       <div>{major}</div>
      {minors.map((minor) => <div key={minor.id}>{minor.minorName}</div>
          )}
       <div>{gpa}</div>
       <button type="button" onClick={this.toggleEditing}>Edit</button>
      </div>
    );
  }
}