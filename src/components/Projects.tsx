import * as z from "zod/mini";

import { Project, ProjectSchema } from "../types";
import projectJSON from "../content/text/projects.json";

const ProjectComponent = ({ projectData }: { projectData: Project }) => {
  const { title, desc, outLinks, imagePath } = projectData;

  return (
    <div className="outlined-content project-card">
      <div>
        <img src={imagePath} alt={`${title}`} style={{ width: "200px", height: "200px", objectFit: "scale-down" }} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div style={{ display: "flex", flex: "row" }}>
        {outLinks.map((link) => (
          <a key={link.link} className="link-tag" href={link.link} target="_blank" rel="noopener noreferrer">
            <span>{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  const projects: Project[] = z.array(ProjectSchema).parse(projectJSON);

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectComponent key={project.title} projectData={project} />
      ))}
    </div>
  );
};
