import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectsArray = projects.map((project) => {
    <ProjectItem key={project.id}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}{projectsArray}</div>
    </div>
  );
}

export default ProjectList;
