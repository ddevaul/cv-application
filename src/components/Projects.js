import './Projects.css';
import React from 'react';
import uniqid from "uniqid";

export default class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editing: true,
      projects: [],
    }
  }

  handleChange = (e) => {
    const attribute = e.target.name.slice(0, (e.target.name.length - 1));
    const index = e.target.name.charAt(e.target.name.length - 1);
    const tempProjectsArray = this.state.projects;
    const project = tempProjectsArray[index];
    project[attribute] = e.target.value;
    this.setState({
      projects: tempProjectsArray
    });
  }

  toggleEditing = () => {
    this.setState({editing: !this.state.editing});
  }

  addProject = () => {
    this.setState({projects: [...this.state.projects, 
      {title: "", description: "", id: uniqid()}]});
  }

  deleteProject = (e) => {
    this.setState({projects: this.state.projects.filter((projects) => projects.id === e.target.id ? false : true)});
  }

  render(){
    const {editing, projects} = this.state;

    if (editing) {
      return (
        <div className="projects">
          <label className="title">
            Projects:
          </label>
          {projects.map((project, index) => 
              {
                return <div key={project.id} className="project-editing">
                <label className="header">
                  Title:
                  <input name={`title${index}`} value={project.title} onChange={this.handleChange}></input>
                </label>
                <label className="description">
                  Description:
                  <textarea name={`description${index}`} value={project.description} onChange={this.handleChange}></textarea>
                </label>
                <button id={project.id} onClick={this.deleteProject}>delete</button>
              </div>}
                )}
            <div className="centered-button-div">
              <button onClick={this.addProject}>Add Project</button>
               <button onClick={this.toggleEditing} type="button">Submit</button>
            </div>
        </div>
      );
    }
    let title;
    if (projects.length > 0) {
      title = <div className="title">Projects</div>;
    }
    return (
      <div className="projects">
      {title}
      {projects.map((project) => <div className="project" key={project.id}>
        <div className="header"> {project.title} </div>
        <div className="description"> {project.description} </div>
        </div>
          )}
       <button className="projects-centered-button" type="button" onClick={this.toggleEditing}>Edit</button>
      </div>
    );
  }
}