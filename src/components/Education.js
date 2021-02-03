import React from 'react';

export default class Education extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: true,
      college: "Princeton",
      gradYear: "2024",
      studying: "Classics", // could make this an array of objects or something like that 
      gpa: "4.20",
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  toggleEditing = () => {
    this.setState({editing: !this.state.editing});
  }
  render(){
    const {editing, college, gradYear, studying, gpa} = this.state;
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
            Studied: 
           <input name="studying"  onChange={this.handleChange} value={studying}></input>
          </label>
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
       <div>{studying}</div>
       <div>{gpa}</div>
       <button type="button" onClick={this.toggleEditing}>Edit</button>
      </div>
    );
  }
}