import React from "react";

function ProjectDescription (props){
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default ProjectDescription;