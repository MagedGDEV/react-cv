import React from "react";
import Logo from "./Logo";
import ProjectDescription from "./ProjectDescription";
function Project(props) {
  return (
    <div className={props.isLeft ? "leftDescription" : "rightDescription"}  >
      <Logo image={props.image} alt={props.alt} isLeft={props.isLeft} />
      <ProjectDescription title={props.title} description={props.description} class ={props.isLeft ? "left" : "right"}/>
    </div>
  );
}

export default Project;
