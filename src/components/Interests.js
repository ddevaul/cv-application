import './styles/Interests.css';
import React from 'react';
import uniqid from "uniqid";

export default class Interests extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      // default interests
      interests: [{title: "Playing guitar", description: "I've played guitar for 12 years.", id: uniqid()}],
    }
  }
  // updates state to be value currently in the input
  handleChange = (e) => {
    const attribute = e.target.name.slice(0, (e.target.name.length - 1));
    const index = e.target.name.charAt(e.target.name.length - 1);
    const tempInterestsArray = this.state.interests;
    const interest = tempInterestsArray[index];
    interest[attribute] = e.target.value;
    this.setState({
      interests: tempInterestsArray
    });
  }

  toggleEditing = () => {
    this.setState({editing: !this.state.editing});
  }

  addInterest = () => {
    this.setState({interests: [...this.state.interests, 
      {title: "", description: "", id: uniqid()}]});
  }

  deleteInterest = (e) => {
    this.setState({interests: this.state.i.filter((interest) => interest.id === e.target.id ? false : true)});
  }

  render(){
    const {editing, interests} = this.state;

    if (editing) {
      return (
        <div className="interests">
          <label className="title">
            Interests:
          </label>
          {interests.map((interest, index) => 
              {
                return <div key={interest.id} className="interest-editing">
                <label className="header">
                  Title:
                  <input name={`title${index}`} value={interest.title} onChange={this.handleChange}></input>
                </label>
                <label className="description">
                  Description:
                  <textarea name={`description${index}`} value={interest.description} onChange={this.handleChange}></textarea>
                </label>
                <button id={interest.id} onClick={this.deleteInterest}>delete</button>
              </div>}
                )}
            <div className="centered-button-div">
              <button onClick={this.addInterest}>Add Interest</button>
               <button onClick={this.toggleEditing} type="button">Submit</button>
            </div>
        </div>
      );
    }
    // if not editing: 
    let title;
    // don't display title if there are no projects
    if (interests.length > 0) {
      title = <div className="title">Interests</div>;
    }
    return (
      <div className="interests">
      {title}
      {interests.map((interest) => <div className="interest" key={interest.id}>
        <div className="header"> {interest.title} </div>
        <div className="description"> {interest.description} </div>
        </div>
          )}
       <button className="interests-centered-button" type="button" onClick={this.toggleEditing}>Edit</button>
      </div>
    );
  }
}