import './App.css';
import ContactInfo from './components/ContactInfo.js'
import Education from './components/Education.js'
import WorkExperience from './components/WorkExperience.js'
import Projects from './components/Projects.js'
import Summary from './components/Summary.js'
import Skills from './components/Skills.js'
import Interests from './components/Interests.js'







function App() {
  return (  
    <div className="page">
      <div className="App-container">
        <ContactInfo className="contact"/>
        <Education className="education"/>
        <div className="container">
          <Summary></Summary>
          <Skills className="skills"/>
          <Interests></Interests>
        </div>
        <WorkExperience className="work"/>
        <Projects className="projects"/>
        <div className="line"></div>
      </div>
    </div>
   
  );
}

export default App;
