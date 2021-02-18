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
      {/* this is the div that is the size of a piece of paper */}
      <div className="App-container">
        <ContactInfo className="contact"/>
        <div className="info">
          <div className="container-r">
            <Education className="education"/>
            <WorkExperience className="work"/>
            <Projects className="projects"/>
          </div>  
          <div className="container-l">
            <Summary></Summary>
            <Skills className="skills"/>
            <Interests></Interests>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default App;
