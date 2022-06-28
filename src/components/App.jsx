import React from "react";
import Welcome from "./intialPage/WelcomeDiv/Welcome";
import Projects from "./intialPage/ProjectsDiv/Projects";
import Skills from "./intialPage/SkillsDiv/Skills";
import Header from "./headerSection/Header";

function App() {
  return (
    <div>
   
        <Header/>
        <Welcome />
        <Projects />
        <Skills />
        
        </div>
  );
}

export default App;
