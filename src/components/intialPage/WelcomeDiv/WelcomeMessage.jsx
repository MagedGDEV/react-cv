import React from "react";

function WelcomeMessage() {
  return (
    <div className="welcomeMessage">
      <h4 className = "hello">Hello World!, I am</h4>
      <h1 className="name">Maged Magdi Alosali</h1>
      <h2 >A Passionate Software Engineer</h2>
      <p className="text">
      I am a software engineering student at Cairo University, a professional programmer who has been through multiple projects.
      </p>
      <p className="text">
      I am looking for an internship in a company that is going to help me enhance my knowledge, and skills and work on real-life projects.
      </p>
      <h3 className="why">Why Choose Me?</h3>
      <ul className="text">
        <li>I am a hard-working and dedicated person who is always ready to learn new tools and technologies.</li>
        <li>I am also a good team member who is always ready to help others.</li>
        <li>I had the chance to lead several projects and manage conflicts between team members.</li>
        
      </ul>
    </div>
  );
}

export default WelcomeMessage;
