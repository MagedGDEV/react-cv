import React from "react";
import Project from "./Project";
import projectsData from "./projectsData";

function Projects() {
  function createProject(project) {
    var index = projectsData.indexOf(project);
    if (index % 2 === 0) {
      return (
        <Project
          key={index}
          image={project.logo}
          alt={project.alt}
          title={project.projectName}
          description={project.projectDescription}
          isLeft={false}
        />
      );
    } else {
      return (
        <Project
          key={index}
          image={project.logo}
          alt={project.alt}
          title={project.projectName}
          description={project.projectDescription}
          isLeft={false}
        />
      );
    }
  }

  function insertHr(projectViews) {
    var finalViews = [];
    finalViews.push(projectViews[0]);
    for (var i = 1; i < projectViews.length; i++) {
      if (i % 2 === 0) {
        finalViews.push(<hr key={i * 100} />);
        finalViews.push(projectViews[i]);
      } else {
        finalViews.push(projectViews[i]);
      }
    }
    return finalViews;
  }

  const projectsViews = projectsData.map(createProject);

  return (
    <div id="projects">
      <h2 className="headers">Projects Experiences</h2>

      {insertHr(projectsViews)}
    </div>
  );
}

export default Projects;
