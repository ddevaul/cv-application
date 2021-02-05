import './styles/ContactInfo.css'
import React from 'react';

export default class ContactInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false,
      firstname: "Desmond",
      lastname: "DeVaul",
      phone: "123455789",
      email: "ddevaul@gmail.com",
      linkedin: "desi@linkedin",
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
    const {editing, firstname, lastname, phone, email, linkedin} = this.state;
    if (editing) {
      return (
        <div className="contact">
          <div className="name-div">
            <label>
              First Name: 
              <input className="name" name="firstname" onChange={this.handleChange} value={firstname}></input>
            </label>
            <label>
              Last Name: 
              <input className="name" name="lastname"  onChange={this.handleChange} value={lastname}></input>
            </label>
          </div>

          <label>
            Phone Number: 
            <input className="info" name="phone" type="phone" onChange={this.handleChange} value={phone}></input>
          </label>
          <label>
            Email:
            <input className="info" name="email"  onChange={this.handleChange} value={email}></input>
          </label>
          <label>
            LinkedIn: 
            <input className="info" name="linkedin"  onChange={this.handleChange} value={linkedin}></input>
          </label>
          <button className="edit-button" onClick={this.toggleEditing} type="button">submit</button>
        </div>
      );
    }
    return (
      <div className="contact">
       <div className="name-div name">{firstname} {lastname}</div>
       <div>{phone}</div>
       <div>{email}</div>
       <div>{linkedin}</div>
       <button className="edit-button" type="button" onClick={this.toggleEditing}>Edit</button>
      </div>
    );
  }
}