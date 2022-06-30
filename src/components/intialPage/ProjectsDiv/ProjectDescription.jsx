import React from "react";

function ProjectDescription(props) {
  return (
    <div className={props.class} >
      <h3 className="proTitle">{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectDescription;
