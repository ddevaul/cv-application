import './Summary.css'
import React from 'react';

export default class Summary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a mattis nibh. Mauris vel ornare turpis. Mauris commodo rhoncus facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec accumsan, nisi nec posuere consectetur, magna tellus efficitur diam, eget elementum leo libero vel dui.",
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
    const {editing, summary} = this.state;
    if (editing) {
      return (
        <div className="summary-div">
          <label className="title"> Summary 
            <textarea className="summary" name="summary" onChange={this.handleChange} value={summary}></textarea>
            <button className="edit-button" onClick={this.toggleEditing} type="button">submit</button>
          </label>
        </div>
      );
    }
    return (
      <div className="summary-div">
        <label className="title">Summary 
         <p className="summary">{summary}</p>
         <button className="edit-button" type="button" onClick={this.toggleEditing}>Edit</button>
        </label>
      </div>
    );
  }
}