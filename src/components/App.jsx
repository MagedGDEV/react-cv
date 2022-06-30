import React from "react";
import Welcome from "./intialPage/WelcomeDiv/Welcome";
import Projects from "./intialPage/ProjectsDiv/Projects";
import Skills from "./intialPage/SkillsDiv/Skills";
import Header from "./headerSection/Header";
import Footer from "./FooterSection/Footer";
// import Margin from "./Margin";
function App() {
  return (
    <div>
      <Header />
       {/* <Margin />  */}
      <Welcome />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
