import React from 'react';

export default class ContactInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: true,
      firstname: "desi",
      lastname: "devaul",
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
        <div>
          <label>
            First Name:
            <input name="firstname" onChange={this.handleChange} value={firstname}></input>
          </label>
          <label>
            Last Name:
            <input name="lastname"  onChange={this.handleChange} value={lastname}></input>
          </label>
          <label>
            Phone Number:
            <input name="phone"  onChange={this.handleChange} value={phone}></input>
          </label>
          <label>
            Email:
            <input name="email"  onChange={this.handleChange} value={email}></input>
          </label>
          <label>
            LinkedIn:
            <input name="linkedin"  onChange={this.handleChange} value={linkedin}></input>
          </label>
          <button onClick={this.toggleEditing} type="button">submit</button>
        </div>
      );
    }
    return (
      <div>
       <div>{firstname}</div>
       <div>{lastname}</div>
       <div>{phone}</div>
       <div>{email}</div>
       <div>{linkedin}</div>
       <button type="button" onClick={this.toggleEditing}>Edit</button>
      </div>
    );
  }
}